import React from 'react';
import {StyleSheet, Text, TextInput, View, TextInputProps} from 'react-native';

interface InputWithLabelProps extends TextInputProps {
  label: string;
  error?: string;
}

const InputWithLabel = ({label, error, ...props}: InputWithLabelProps) => {
  const styles = useStyles(!!error);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        {...props}
      />
    </View>
  );
};

const useStyles = (error: boolean) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
      paddingVertical: 8,
    },
    label: {
      marginLeft: 'auto',
    },
    input: {
      backgroundColor: 'white',
      borderRadius: 8,
      width: '66%',
      padding: 4,
      borderWidth: error ? 2 : 1,
      borderColor: !error ? 'grey' : 'red',
      elevation: 4,
      shadowColor: 'black',
      shadowOpacity: 0.4,
      shadowRadius: 1.5,
      shadowOffset: {width: 0, height: 1},
    },
  });

export default InputWithLabel;
