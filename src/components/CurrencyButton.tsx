import React from 'react';
import {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type CurrencyButtonType = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = ({name, flag}: CurrencyButtonType) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonFlag}>{flag}</Text>
      <Text style={styles.buttonName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  buttonFlag: {
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 8,
  },
  buttonName: {
    fontSize: 14,
    color: '#2d3436',
  },
});

export default CurrencyButton;
