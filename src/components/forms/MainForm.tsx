import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownWithLabel from '../inputs/DropDownWithLabel';
import ManualUserForm from './ManualUserForm';
import AdvancedUserForm from './AdvancedUserForm';

export enum FromTypes {
  MANUAL = 'Manual',
  ADVANCED = 'Advanced',
}

const MainForm = () => {
  const [selectedType, setSelectedType] = useState<string>(FromTypes.MANUAL);

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  return (
    <View style={styles.container}>
      <DropDownWithLabel
        label="Account Type"
        value={selectedType}
        options={[
          {value: FromTypes.MANUAL, label: FromTypes.MANUAL},
          {value: FromTypes.ADVANCED, label: FromTypes.ADVANCED},
        ]}
        onSelect={handleTypeSelect}
      />
      {selectedType === FromTypes.ADVANCED ? (
        <AdvancedUserForm />
      ) : (
        <ManualUserForm />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default MainForm;
