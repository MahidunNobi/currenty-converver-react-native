import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Snackbar from 'react-native-snackbar';
import {currencyByRupee} from './constants';
import CurrencyButton from './components/CurrencyButton';

function App(): React.JSX.Element {
  const [input, setInput] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [resultValue, setresultValue] = useState('');

  const buttonPressed = (item: Currency) => {
    setresultValue('');
    setTargetCurrency(item.name);
    if (!input) {
      return Snackbar.show({
        text: 'Please  Provide a valid number',
        backgroundColor: '#FF3031',
        textColor: '#FFFFFF',
      });
    }
    const inputNum = parseFloat(input);
    if (isNaN(inputNum)) {
      return Snackbar.show({
        text: 'Please  Provide a valid number',
        backgroundColor: '#FF3031',
        textColor: '#FFFFFF',
      });
    }
    setresultValue((inputNum * item.value).toFixed(2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      // backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.topContainer}>
        <Text style={styles.resultTxt}>
          {' '}
          {resultValue !== '' && `Your converted value is ${resultValue} 🤑`}
        </Text>
        <TextInput
          style={styles.inputAmountField}
          placeholder="Type here to translate!"
          onChangeText={newText => setInput(newText)}
          defaultValue={input}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
              style={[
                styles.button,
                targetCurrency === item.name && styles.selected,
              ]}
              onPress={() => buttonPressed(item)}>
              <CurrencyButton {...item} />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    // height: 60,
    padding: 6,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
