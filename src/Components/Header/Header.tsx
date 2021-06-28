
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    
   
} from 'react-native';

import cores from '../../Styles/cores';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header() {
    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        async function loadStoreUserName() {
            const user: string = await AsyncStorage.getItem('@nomeApp:userName') || '';
            setUserName(user);
        }
        loadStoreUserName();
    }, []);



    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>
         
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: 20,

    },
  
    greeting: {
        fontSize: 32,
        color: cores.blue
    },
    userName: {
        fontSize: 32,
        color: cores.blue,
        lineHeight: 40,
        fontWeight: 'bold'
    }
});