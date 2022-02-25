import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

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
    <View style={styles.container}>
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={''}
        mode='outlined'
        label='Firstname'
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={''}
        mode='outlined'
        label='Lastname'
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={''}
        mode='outlined'
        label='Country'
        value={country}
        onChangeText={(text) => setCountry(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={''}
        mode='outlined'
        label='Adress'
        value={adress}
        onChangeText={(text) => setAdress(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={''}
        mode='outlined'
        label='postalcode'
        value={postalcode}
        onChangeText={(text) => setPostalcode(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={''}
        mode='outlined'
        label='Date of birth'
        value={dateOfBirth}
        onChangeText={(text) => setDateOfBirth(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={''}
        mode='outlined'
        label='Telephone'
        value={telephone}
        onChangeText={(text) => setTelephone(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={''}
        mode='outlined'
        label='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={''}
        mode='outlined'
        label='password'
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    paddingTop: GLOBAL.SPACING.md,
    paddingHorizontal: GLOBAL.SPACING.xxxl,
  },
  textInput: {
    marginBottom: GLOBAL.SPACING.xl,
    backgroundColor: '#ecf4fb',
  },
});
