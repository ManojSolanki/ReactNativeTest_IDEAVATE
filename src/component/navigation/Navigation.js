import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from '../../views/LoginPage';
import DashboardPage from '../../views/DashboardPage';

const Navigation = createStackNavigator({
    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            header: null
        },
    },
    DashboardPage: {
        screen: DashboardPage,
        navigationOptions: {
            header: null
        },
    }
}, {
        initialRouteName: 'LoginPage',
    });

export default createAppContainer(Navigation);
