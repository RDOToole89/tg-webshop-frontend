import { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { Button } from 'react-native-paper';
import { HorizontalRule } from '../global/elements/HorizontalRule';

export const AccountScreen = () => {
  // temporary code to repesent a user entity
  const fetchUser = {
    firstName: 'Roibin',
    lastName: 'OToole',
    country: 'The Netherlands',
    adress: 'Jan Cupidohof 17hs',
    postalcode: '1064gs',
    dateOfBirth: '03-05-1989',
    telephone: '0613422442',
    email: 'test@test.com',
    password: 'test',
  };

  const [firstName, setFirstName] = useState(fetchUser.firstName);
  const [lastName, setLastName] = useState(fetchUser.lastName);
  const [country, setCountry] = useState(fetchUser.country);
  const [adress, setAdress] = useState(fetchUser.adress);
  const [postalcode, setPostalcode] = useState(fetchUser.postalcode);
  const [dateOfBirth, setDateOfBirth] = useState(fetchUser.dateOfBirth);
  const [telephone, setTelephone] = useState(fetchUser.telephone);
  const [email, setEmail] = useState(fetchUser.email);
  const [password, setPassword] = useState(fetchUser.password);

  return (
    <ScrollView style={styles.container}>
      <Text
        style={[
          TYPOGRAPHY.FONT.h2,
          { fontFamily: TYPOGRAPHY.FONT.PrimaryBold },
        ]}>
        Account information
      </Text>

      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={true}
        mode='outlined'
        label='Firstname'
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={true}
        mode='outlined'
        label='Lastname'
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={true}
        mode='outlined'
        label='Country'
        value={country}
        onChangeText={(text) => setCountry(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={true}
        mode='outlined'
        label='Adress'
        value={adress}
        onChangeText={(text) => setAdress(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={true}
        mode='outlined'
        label='postalcode'
        value={postalcode}
        onChangeText={(text) => setPostalcode(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={true}
        mode='outlined'
        label='Date of birth'
        value={dateOfBirth}
        onChangeText={(text) => setDateOfBirth(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={true}
        mode='outlined'
        label='Telephone'
        value={telephone}
        onChangeText={(text) => setTelephone(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={true}
        mode='outlined'
        label='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
        activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
        style={[styles.textInput, { borderColor: 'red' }]}
        autoComplete={true}
        mode='outlined'
        label='password'
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <HorizontalRule
        style={{
          marginVertical: GLOBAL.SPACING.md,
          marginBottom: GLOBAL.SPACING.xl,
          width: '100%',
        }}
      />
      <Button
        style={{
          borderRadius: 0,
          width: '100%',
          marginBottom: GLOBAL.SPACING.xxxxl,
        }}
        color='#e7230d'
        mode='contained'
        onPress={() => console.log('press')}>
        <Text>SUBMIT CHANGES</Text>
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    paddingVertical: GLOBAL.SPACING.md,
    paddingHorizontal: GLOBAL.SPACING.xxxl,
  },
  textInput: {
    marginBottom: GLOBAL.SPACING.md,
    backgroundColor: '#ecf4fb',
  },
});
