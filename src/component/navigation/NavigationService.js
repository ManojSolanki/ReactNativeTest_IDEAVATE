import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    //NavigationActions.setParams({ params: undefined });
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function goBack(params) {
    _navigator.dispatch(
        NavigationActions.back({
            params
        })
    );
}

function reset(routeName, params) {
    _navigator.dispatch(
        StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    type: 'Navigation/NAVIGATE',
                    routeName,
                    params,
                }),
            ],
        }),
    );
}

function replace(routeNames, params) {
    _navigator.dispatch(
        StackActions.replace({
            index: 0,
            newKey: routeNames,
            routeName: routeNames,
            params,
            actions: [
                NavigationActions.navigate({
                    routeNames,
                    params,
                }),
            ],
        }),
    );
}

function navigateNestedTab(parantRoute, childRoute, params) {
    NavigationActions.setParams({ params: undefined });
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName: parantRoute,
            params,
            action: NavigationActions.navigate({
                routeName: childRoute,
                params,
            }),
        })
    );
}

// add other navigation functions that you need and export them

export default {
    navigate,
    goBack,
    setTopLevelNavigator,
    reset,
    replace,
    navigateNestedTab
};
