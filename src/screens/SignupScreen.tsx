import { View, Text, StyleSheet } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { useState } from 'react';
import { HorizontalRule } from '../global/elements/HorizontalRule';
import { TYPOGRAPHY } from '../global/styles/typography';
import { TopBar } from '../components/TopBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/navigation';
import { PressableText } from '../global/elements/PressableText';
import { useActions } from '../hooks/useActions';

export const SignupScreen = () => {
  const { loginUser } = useActions();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const signUp = () => {
    if (!firstName || !lastName || !email || !password)
      alert('Please fill in all fields to create and account');

    // dispatch userDetails to the server
    // if user does not exist
    // create DB ENTRY server side for user
    // if user successfully created login user and provide token

    let accountCreationSuccess = false;

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      checked,
    };

    if (firstName && lastName && email && password)
      accountCreationSuccess = true;

    if (accountCreationSuccess) {
      loginUser({
        userName: 'RDOToole89',
        firstName: 'Roibin',
        lastName: 'OToole',
        email: 'roibinotoole@gmail.com',
        remainLoggedIn: true,
      });
      navigation.navigate('Home');
    }
  };

  return (
    <>
      <TopBar
        align='flex-start'
        style={{ marginBottom: 20 }}
        iconsActive={false}
      />
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginBottom: 4 }}>
          <Text style={{ fontFamily: 'impact', fontSize: 14 }}>
            Welcome to{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'impact',
              color: TYPOGRAPHY.COLOR.BrandBlack,
              fontSize: 14,
            }}>
            LameStop
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'open-sans',
              fontSize: 10,
              letterSpacing: 0.2,
              marginBottom: 8,
            }}>
            Create your LameStop account today for just 20$
          </Text>
        </View>
        <TextInput
          theme={{
            colors: { primary: '#121212' },
          }}
          mode='outlined'
          label='Firstname'
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          autoComplete=''
          style={[styles.textInput, { backgroundColor: '#FFF' }]}
        />
        <TextInput
          theme={{
            colors: { primary: '#121212' },
          }}
          mode='outlined'
          label='Lastname'
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          autoComplete=''
          style={[styles.textInput, { backgroundColor: '#FFF' }]}
        />
        <TextInput
          theme={{
            colors: { primary: '#121212' },
          }}
          mode='outlined'
          label='email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoComplete=''
          style={styles.textInput}
        />
        <TextInput
          theme={{
            colors: { primary: '#121212' },
          }}
          mode='outlined'
          label='password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoComplete=''
          style={styles.textInput}
        />
        <Text style={{ textDecorationLine: 'underline' }}>
          Forgot password?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: GLOBAL.SPACING.sm,
          }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text>Keep me signed in</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Button
            style={{ borderRadius: 0, width: '100%' }}
            color='#e7230d'
            mode='contained'
            onPress={signUp}>
            <Text>SUBMIT</Text>
          </Button>
          <HorizontalRule
            text='or'
            style={{ marginVertical: GLOBAL.SPACING.md, width: '100%' }}
          />

          <PressableText
            onPress={() => navigation.goBack()}
            text='Sign in'
            textStyle={{ alignSelf: 'center' }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    paddingTop: GLOBAL.SPACING.md,
    paddingHorizontal: GLOBAL.SPACING.xl,
  },
  textInput: {
    marginBottom: GLOBAL.SPACING.sm,
    backgroundColor: '#ecf4fb',
  },
});
