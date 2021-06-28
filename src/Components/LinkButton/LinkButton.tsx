import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import cores from '../../Styles/cores';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function LinkButton({ title, ...rest }: ButtonProps) {

    return (
        <>
            <TouchableOpacity style={styles.MyButtonStyle}
                activeOpacity={0.7}
                {...rest}
            >
                <Text style={styles.MyTextButtonStyle}> {title} </Text>
            </TouchableOpacity>
        </>

    );
}


const styles = StyleSheet.create({
    MyButtonStyle: {
        backgroundColor: cores.white,
        borderRadius: 8,
        height: 50,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16
    },
    MyTextButtonStyle: {
        color: cores.blue,
        fontSize: 18,
        fontWeight: 'bold'
    },
});