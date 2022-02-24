import { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

export const AccountScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [adress, setAdress] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        autoComplete={''}
        label='Firstname'
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        autoComplete={''}
        label='Lastname'
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        autoComplete={''}
        label='Country'
        value={country}
        onChangeText={(text) => setCountry(text)}
      />
      <TextInput
        autoComplete={''}
        label='Adress'
        value={adress}
        onChangeText={(text) => setAdress(text)}
      />
      <TextInput
        autoComplete={''}
        label='postalcode'
        value={postalcode}
        onChangeText={(text) => setPostalcode(text)}
      />
      <TextInput
        autoComplete={''}
        label='Date of birth'
        value={dateOfBirth}
        onChangeText={(text) => setDateOfBirth(text)}
      />
      <TextInput
        autoComplete={''}
        label='Telephone'
        value={telephone}
        onChangeText={(text) => setTelephone(text)}
      />
      <TextInput
        autoComplete={''}
        label='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        autoComplete={''}
        label='password'
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
    </View>
  );
};
