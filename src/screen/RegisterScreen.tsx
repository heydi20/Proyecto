import React, { useState } from 'react';
import { Alert, Image, StatusBar, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import {THIRD_COLOR} from '../commons/constans';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navegator/StackNavigator';

interface Props {
  users: User[];
  handleAddUser: (user: User) => void;
}

interface FormRegister {
  name: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
}
  
export const RegisterScreen = ({ users, handleAddUser }: Props) => {
  const navigation = useNavigation();

  const [FormRegister, setFormRegister] = useState<FormRegister>({
    name: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: ''
});

  const [hiddenPaswword, setHiddenPaswword] = useState<boolean>(true);

  const handleSetValues = (name: string, value: string) => {
      setFormRegister({ ...FormRegister, [name]: value });
  }

  const handleSignIn = () => {
    if (!FormRegister.name || !FormRegister.lastName || !FormRegister.username || !FormRegister.email || !FormRegister.phoneNumber || !FormRegister.password) {
      Alert.alert(
          'Incompleto',
          'Por favor, ingrese los datos'
      );
      return;
  }

  if (verifyUser() != null) {
    Alert.alert(
        'Error',
        'El usuario ya se encuentra registrado!'
    );
    return;
  }
  const getIdUsers = users.map(user => user.id);

  const getNewId = Math.max(...getIdUsers) + 1;

  const newUser: User = {
    id: getNewId,
    email: FormRegister.email,
    password: FormRegister.password
  }
  handleAddUser(newUser);

  Alert.alert(
    'Felicitaciones',
    'Registro existoso!'
  );
  
  navigation.goBack();

}

    const verifyUser = () => {
        const existUser = users.filter(user => user.email === FormRegister.email)[0];
        return existUser;
      }

  return (
    <View style={styles.container} >
      <StatusBar backgroundColor={THIRD_COLOR} />
      <TitleComponent title='R e g i s t r o' />

      <BodyComponent>
        <View>
          <Text style={styles.titleRegister}>- Ingresa tus Datos -</Text>
          <Image source={{ uri: 'https://img.freepik.com/free-vector/feminine-instagram-highlight-icon-woman-character-sticker-earthy-illustration-vector_53876-154304.jpg' }} 
          style={styles.imageRegister} />
        </View>

        <View style={styles.contentInput}>
          <InputComponent
            placeholder='Nombre'
            handleSetValues={handleSetValues}
            name='name'
          />

          <InputComponent
            placeholder='Apellido'
            handleSetValues={handleSetValues}
            name='lastName'
          />

          <InputComponent
            placeholder='Nombre de Usuario'
            handleSetValues={handleSetValues}
            name='username'
          />

          <InputComponent
            placeholder='Correo electrónico'
            handleSetValues={handleSetValues}
            name='email'
            keyboardType='email-address'
            autoCapitalize='none'
          />

          <InputComponent
            placeholder='Número Telefónico'
            handleSetValues={handleSetValues}
            name='phoneNumber'
            keyboardType='number-pad'
          />

          <InputComponent
            placeholder='Contraseña'
            handleSetValues={handleSetValues}
            name='password'
            isPassword={hiddenPaswword}
            hasIcon={true}
            setHiddenPaswword={() => setHiddenPaswword(!hiddenPaswword)}
            autoCapitalize='none'
          />
        </View>
        <ButtonComponent textButton='Registrarse' onPress={handleSignIn} />
        
        <TouchableOpacity
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'LoginScreen' }))}>
          <Text style={styles.textRedirection}>Ya tienes una cuenta? Inciar sesión ahora</Text>
        </TouchableOpacity>
      </BodyComponent>
  </View>
)
}