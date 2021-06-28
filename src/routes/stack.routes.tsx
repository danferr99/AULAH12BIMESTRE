import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import colors from '../Styles/cores';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import NewPaciente from '../Pages/NewPaciente/NewPaciente';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >

        <stackRoutes.Screen
            name="Login"
            component={Login}
        />

        <stackRoutes.Screen
            name="Home"
            component={Home}
        />

        <stackRoutes.Screen
            name="NewPaciente"
            component={NewPaciente}
        />

    </stackRoutes.Navigator>
);

export default AppRoutes;



