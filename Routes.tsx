import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';
import Registrar from './Registrar';

export default function Routes() {
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{header:() => null}} />
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Registrar' component={Registrar}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
