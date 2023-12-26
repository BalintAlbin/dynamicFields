import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainForm from './src/components/forms/MainForm';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.appContainer}>
      <MainForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
