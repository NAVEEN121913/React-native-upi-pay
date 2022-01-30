import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet} from 'react-native';
import {Header, Button} from 'react-native-elements';
import {TextInput} from 'react-native-paper';
import RNUpiPayment from 'react-native-upi-pay';

const App = () => {
  const [vpa, setVpa] = useState('');
  const [payeeName, setPayeeName] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionRef, setTransactionRef] = useState('');
  const [transactionNote, setTransactionNote] = useState('');
  console.log('vpa>>>>>>>', vpa);
  console.log('payeeName>>>>>>>', payeeName);
  console.log('amount>>>>>>>>', amount);
  console.log('transactionRef>>>>>>>>>>>>>>>', transactionRef);
  console.log('transactionNote>>>>>>>>>>', transactionNote);
  const payMoney = () => {
    RNUpiPayment.initializePayment(
      {
        vpa, // or can be john@ybl or mobileNo@upi
        payeeName,
        amount,
        transactionRef,
        transactionNote,
      },
      () => {
        console.log('success>>>>>>>>>>>');
      },
      err => {
        console.log('err>>>>>>>', err);
      },
    );
  };
  return (
    <View>
      <Header
        style={styles.header}
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{
          text: 'NC PAY',
          style: {color: '#fff', marginTop: 5},
        }}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="VPA ID"
          onChangeText={value => setVpa(value)}
          left={
            <TextInput.Icon
              name="account-cash-outline"
              size={24}
              color="white"
            />
          }
        />
        <TextInput
          mode="outlined"
          label="Payee Name"
          onChangeText={value => setPayeeName(value)}
          left={<TextInput.Icon name="account-check" size={24} color="white" />}
        />
        <TextInput
          mode="outlined"
          label="Amount"
          onChangeText={value => setAmount(value)}
          left={<TextInput.Icon name="currency-inr" size={24} color="white" />}
        />
        <TextInput
          mode="outlined"
          label="Transaction Reference"
          onChangeText={value => setTransactionRef(value)}
          left={
            <TextInput.Icon
              name="account-child-circle"
              size={24}
              color="white"
            />
          }
        />
        <TextInput
          mode="outlined"
          label="Transaction Note"
          onChangeText={value => setTransactionNote(value)}
          left={<TextInput.Icon name="account-child" size={24} color="white" />}
        />
      </View>
      <View style={styles.btnStlye}>
        <Button title="Pay Now" onPress={payMoney} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: 30,
  },
  container: {
    justifyContent: 'center',
    marginTop: 130,
    marginLeft: 20,
    marginRight: 20,
  },
  btnStlye: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default App;
