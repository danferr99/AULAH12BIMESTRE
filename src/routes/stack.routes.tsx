import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import color from '../Styles/color';
import Page1 from '../Pages/Page1'
import Welcome from '../Welcome/Welcome'


const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: color.white
            }
        }}
    >
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />
        <stackRoutes.Screen
            name="Page1"
            component={Page1}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;