import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import InputWithLabel from '../inputs/InputWithLabel';
import {Formik} from 'formik';
import Button from '../Button';

const ManualUserForm = () => {
  const validate = (values: {
    username?: string;
    password?: string;
    serverAddress?: string;
  }) => {
    const errors = {
      username: '',
      password: '',
      serverAddress: '',
    };
    let wasError = false;

    if (!values.username) {
      errors.username = 'required';
      wasError = true;
    }
    if (!values.password) {
      errors.password = 'required';
      wasError = true;
    }

    const urlRegex =
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\/\S*)?$/;

    if (!values.serverAddress || !urlRegex.test(values.serverAddress)) {
      errors.serverAddress = 'not a host';
      wasError = true;
    }

    if (!wasError) {
      return null;
    }

    return errors;
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          username: '',
          password: '',
          serverAddress: '',
        }}
        validate={validate}
        onSubmit={values => {
          console.log(values);
          Alert.alert('Values:', JSON.stringify(values));
        }}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <InputWithLabel
              value={values.username}
              label={'User Name'}
              error={errors.username}
              placeholder={'name@example.com'}
              onChangeText={handleChange('username')}
            />
            <InputWithLabel
              value={values.password}
              label={'Password'}
              error={errors.password}
              placeholder={'Required'}
              secureTextEntry
              onChangeText={handleChange('password')}
            />
            <InputWithLabel
              value={values.serverAddress}
              label={'Server Address'}
              error={errors.serverAddress}
              placeholder={'example.com'}
              onChangeText={handleChange('serverAddress')}
            />
            <Button title="Submit" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ManualUserForm;
