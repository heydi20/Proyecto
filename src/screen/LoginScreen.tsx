import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { PRIMARY_COLOR, THIRD_COLOR } from '../commons/constans';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { User } from '../navegator/StackNavigator';

interface Props {
    users: User[]
}

interface FormLogin {
    email: string;
    password: string;
}

export const LoginScreen = ({ users }: Props) => {
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });
    
    const [hiddenPaswword, setHiddenPaswword] = useState<boolean>(true);
    
    const navigation = useNavigation();
    
    const handleSetValues = (name: string, value: string) => {
        setFormLogin({ ...formLogin, [name]: value });
    }
    
    const handleSignIn = () => {
        if (!formLogin.email || !formLogin.password) {
            Alert.alert(
                'Error',
                'Por favor, ingrese valores en todos los campos!'
            );
            return;
        }

        if (!verifyUser()) {
            Alert.alert(
                'Error',
                'Correo y/o contraseña incorrecta!'
            );
            return;
        }
        navigation.dispatch(CommonActions.navigate({ name: 'HomeScreen' }));
    }
    
    const verifyUser = (): User => {
        const existUser = users.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];
        return existUser;
    }

    return (
    <View style={styles.container}>
        <StatusBar backgroundColor={THIRD_COLOR} />
        <TitleComponent title='I n i c i a r  S e s i ó n' />
        <BodyComponent>
            <View>
                <Text style={styles.titleRegister}>- Bienvenido -</Text>
                <Text style={styles.textBody}>Realiza tus compras de manera rápida y segura</Text>
                <Image source={{ uri: 'https://i.pinimg.com/736x/50/d7/3c/50d73c86d8f83c8992f929d4dc02f640.jpg' }} style={styles.imageLogin} />
                </View>
                <View style={styles.contentInput}>
                    <InputComponent
                    placeholder='Correo'
                    handleSetValues={handleSetValues}
                    name='email' />
                    <InputComponent
                    placeholder='Contraseña'
                    handleSetValues={handleSetValues}
                    name='password'
                    isPassword={hiddenPaswword}
                    hasIcon={true}
                    setHiddenPaswword={() => setHiddenPaswword(!hiddenPaswword)} />
            </View>
            <ButtonComponent textButton='Iniciar' onPress={handleSignIn} />
            <TouchableOpacity 
            onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'RegisterScreen' }))}>

            <Text style={styles.textRedirection}>No tienes una cuenta? Regístrate ahora</Text>
            </TouchableOpacity>
            </BodyComponent>
            </View>
            )
        }