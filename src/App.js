/**
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import FlashMessage from 'react-native-flash-message';
import thunk from 'redux-thunk';
import reducer from './reducers'
import Navigation from './component/navigation/Navigation';
import NavigationService from './component/navigation/NavigationService';

const App = () => {
    return (
        <Provider store={createStore(reducer, applyMiddleware(thunk))}>
            <Navigation
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
            <FlashMessage />
        </Provider>
    );
}

export default App;