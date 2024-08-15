import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../commons/constans';

export const WelcomeScreen = () => {
    const navigation = useNavigation();
    
    return ( 
    <ScrollView contentContainerStyle={styles.container}> 
        <Text style={styles.title}>¡Bienvenidos a la mejor Boutique!</Text> 
        <Image source={{ uri: 'https://i.pinimg.com/originals/06/a1/59/06a1595e70bd7c24eca7ee819219240e.jpg' }} style={styles.logo} /> 
        
        <View style={styles.imageContainer}> 
            <Image source={{ uri: 'https://www.inside-shops.ec/wp-content/uploads/2023/10/Capa-1-768x1023.jpg' }} style={styles.image} /> 
            <Image source={{ uri: 'https://www.inside-shops.ec/wp-content/uploads/2021/10/W181816320101.jpg' }} style={styles.image} /> 
            <Image source={{ uri: 'https://www.inside-shops.ec/wp-content/uploads/2021/10/S121763575500.jpg' }} style={styles.image} /> 
        </View> 

        <View  style={styles.contentInput}> 
            <TouchableOpacity style={styles.button} onPress={()=> navigation.dispatch(CommonActions.navigate({name:'LoginScreen'}))}>
            <Text style={styles.titleButton}>Login</Text> 
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={()=> navigation.dispatch(CommonActions.navigate({name:'RegisterScreen'}))}>
            <Text style={styles.titleButton} >Register</Text> 
        </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}> 
            <Image source={{ uri: 'https://acdn.mitiendanube.com/stores/001/943/426/products/inserir-um-pouquinho-de-texto-121-531432198afa05e0af16947808997924-480-0.webp' }} style={styles.image} /> 
            <Image source={{ uri: 'https://acdn.mitiendanube.com/stores/001/943/426/products/71-4b46a0f7f4a271434b16854525585043-320-0.webp' }} style={styles.image} /> 
            <Image source={{ uri: 'https://acdn.mitiendanube.com/stores/001/943/426/products/874374ce-8901-41cc-9b52-c75ed22b12d21-78fefacd235de0edf216948705018574-320-0.webp' }} style={styles.image} /> 
        </View>

        <Text style={styles.infoText}> 
            Nuestra boutique ofrece una amplia variedad de productos de alta calidad.  
            Visítanos para encontrar lo mejor en moda y estilo. 
            
        </Text>
    </ScrollView> 
    ); 
}; 

const styles = StyleSheet.create({ 
    
    container: { 
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 16, 
        backgroundColor: PRIMARY_COLOR, 
    },

    titleButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },

    button: {
        backgroundColor: SECUNDARY_COLOR,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginHorizontal: 10,
        elevation: 4,
        shadowColor: 'blue',
        marginTop:-20
    },

    contentInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,

    },

    title: { 
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#2d3b95', 
        marginTop: 50
    }, 

    imageContainer: { 
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 20
    }, 

    imageContainer2: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '115%',
        paddingHorizontal: 20
    }, 

    logo: { 
        width: 160,
        height: 160,
        marginBottom: 20,
        borderRadius: 80,
        borderWidth: 1,
        borderColor: '#3ca3e8', 
        borderStyle: 'solid',
    }, 

    image: { 
        width: 100,
        height: 100,
        borderRadius: 10,
        marginHorizontal: 5,
    }, 

    infoText: { 
        fontSize: 16, 
        textAlign: 'center', 
        marginBottom: 20, 
    }, 
}); 