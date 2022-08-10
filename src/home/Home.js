import React from "react";
import {Text, View, StyleSheet, TextInput, } from 'react-native';

const api = {
    key: 'd3a90a80843a6dd8d6355e9ce4e52619' //esta es la key de mi cuenta
}
const Home = () => {
    
    return (
        <View style = {styles.container}>
            <View>
                {/*Nombre de la cuidad*/}
                <Text>Hola que hace!</Text>
            </View>
            <View>
                {/*Imagen*/}
            </View>
            <View>
                {/*Datos*/}
            </View>
            <View>
                <TextInput 
                placeholder = "Ingresa el nombre de la cuidad"
                style = {styles.textInput}
                />
            </View>
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#12232E",
    },

    textInput: {
        padding: 10,
        paddingVertical: 20,
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontSize: 20,
        borderRadius: 25,
    },
});
export default Home; 