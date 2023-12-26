import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface PortInputProps {
  useSSL: string;
  port: string;
  portError?: string;
  onPortChange: (text: string) => void;
  onUseSSLChange: () => void;
}

const PortInput = ({
  useSSL,
  port,
  portError,
  onUseSSLChange,
  onPortChange,
}: PortInputProps) => {
  const styles = useStyles(!!portError);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Port:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={port}
          onChangeText={onPortChange}
        />
        <CheckBox
          value={useSSL === 'yes'}
          boxType="square"
          onValueChange={onUseSSLChange}
          onCheckColor="white"
          onFillColor="red"
          onTintColor="red"
          animationDuration={0.2}
        />
        <Text>Use SSL</Text>
      </View>
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
    inputContainer: {
      width: '66%',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    input: {
      backgroundColor: 'white',
      borderRadius: 8,
      width: '30%',
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

export default PortInput;
