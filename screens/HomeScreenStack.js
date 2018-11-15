import {createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import TabBarIcon from '../components/TabBarIcon';
import {Platform} from 'react-native';
import React from 'react';

export const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-map'
            }
        />
    ),
};