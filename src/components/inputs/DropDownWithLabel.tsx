import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

interface DropDownWithLabelProps {
  label: string;
  value: string;
  options: {value: string; label: string}[];
  onSelect: (type: string) => void;
}

const DropDownWithLabel = ({
  options,
  value,
  label,
  onSelect,
}: DropDownWithLabelProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <Dropdown
        style={styles.dropdown}
        labelField={'label'}
        data={options}
        valueField={'value'}
        value={value}
        onChange={item => onSelect(item.value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  dropdown: {
    backgroundColor: 'white',
    paddingHorizontal: 4,
    borderRadius: 8,
    width: '66%',
    borderWidth: 1,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 1.5,
    shadowOffset: {width: 0, height: 1},
  },
});

export default DropDownWithLabel;
