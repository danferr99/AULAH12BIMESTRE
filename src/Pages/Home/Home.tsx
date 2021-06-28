import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    FlatList,
    Button,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import Header from '../../Components/Header/Header';
import cores from '../../Styles/cores';
import OptionButton from '../../Components/OptionButton/OptionButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BorderlessButton } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

interface vaccineType {
    title: string,
    active: boolean
    
}

export default function Home() {
    const navigation = useNavigation();

    const vaccineTypeList: vaccineType[] = [
        {
            title: "1ª Dose",
            active: false
        },
        {
            title: "2ª Dose",
            active: false
        },
    ]

    function navigateToBack() {
        navigation.goBack();
    }
    const [listVaccine, setLista] = useState<vaccineType[]>(vaccineTypeList);



    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
       
              
                <View style={styles.header}>
                    <Header />
                    <Text style={styles.question}>
                        Deseja solicitar qual dose?
                    </Text>
                </View>
                <View style={styles.vaccineListCss}>
                    <FlatList
                        data={listVaccine}
                        renderItem={({ item }) => (
                            <OptionButton title={item.title} active 
                            onPress = {() => {
                                alert('Vacina solicitada!!!')

                            }}

                            />
                        
                            )}
                        
                            showsVerticalScrollIndicator={false}
                        numColumns={2}
                        contentContainerStyle={styles.itemVaccineCSS}
                        keyExtractor={(item, index) => index.toString()}
                     />

           

                </View>
            
            <View style = {styles.LogOut}>

            <Button title = {"Sair"} onPress = {navigateToBack}></Button>

            </View>
            
            

            </KeyboardAvoidingView>
          
       
       
       
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cores.white
    },
    header: {
        paddingHorizontal: 20,
        color: cores.black
    },
    question: {
        fontSize: 17,
        color: cores.black
    },
    vaccineListCss: {

        

    },
    itemVaccineCSS: {
        

    },

    LogOut: {
       
    
        backgroundColor: cores.blue_light,
        height: 70,
        width: '70%',
        justifyContent: 'center',
       marginVertical: 80,
        fontWeight: 'bold',
        margin: 50

    
    
    },

    
});
