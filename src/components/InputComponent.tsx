import React from 'react'
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../commons/constans';
import { styles } from '../theme/appTheme';

interface Props {
    placeholder: string;
    handleSetValues: (name: string, value: string) => void;
    name: string;
    isPassword?: boolean;
    hasIcon?: boolean;
    setHiddenPaswword?: () => void;
    keyboardType?: 'default' | 'email-address' | 'number-pad';
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}
export const InputComponent = ({ placeholder, handleSetValues, name, isPassword = false, hasIcon = false, setHiddenPaswword, keyboardType = 'default', autoCapitalize = 'sentences'}: Props) => {
    return (
        <View>
            {hasIcon && (
                <Icon
                    name='visibility'
                    size={25}
                    color={PRIMARY_COLOR}
                    onPress={setHiddenPaswword}
                    style={styles.iconPassword}
                />
            )}
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                onChangeText={(value) => handleSetValues(name, value)}
                secureTextEntry={isPassword}
                style={styles.inputText}
            />
        </View>
    )
}