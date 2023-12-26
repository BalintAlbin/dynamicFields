import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import InputWithLabel from '../inputs/InputWithLabel';
import PortInput from '../inputs/PortInput';
import {Formik} from 'formik';
import Button from '../Button';

const AdvancedUserForm = () => {
  const validate = (values: {
    username?: string;
    password?: string;
    serverAddress?: string;
    serverPath: string;
    port: string;
    useSSL: string;
  }) => {
    const errors = {
      username: '',
      password: '',
      serverAddress: '',
      serverPath: '',
      port: '',
      useSSL: '',
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

    const pathRegex = /^[a-zA-Z0-9\/]+$/;

    if (!values.serverPath || !pathRegex.test(values.serverPath)) {
      errors.serverPath = 'not a path';
      wasError = true;
    }

    const port = parseInt(values.port, 10);

    if (
      !values.port ||
      (isNaN(port) && Number(port) >= 1 && Number(port) <= 65535)
    ) {
      errors.port = 'invalid';
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
          serverPath: '',
          port: '',
          useSSL: 'no',
        }}
        validate={validate}
        onSubmit={values => {
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
              onChangeText={handleChange('password')}
            />
            <InputWithLabel
              value={values.serverAddress}
              label={'Server Address'}
              error={errors.serverAddress}
              placeholder={'example.com'}
              onChangeText={handleChange('serverAddress')}
            />
            <InputWithLabel
              value={values.serverPath}
              label={'Server Path'}
              error={errors.serverPath}
              placeholder={'/calendars/users'}
              onChangeText={handleChange('serverPath')}
            />
            <PortInput
              useSSL={values.useSSL}
              port={values.port}
              portError={errors.port}
              onPortChange={handleChange('port')}
              onUseSSLChange={async () =>
                handleChange('useSSL')(values.useSSL ? 'no' : 'yes')
              }
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

export default AdvancedUserForm;
