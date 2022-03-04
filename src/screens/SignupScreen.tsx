import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
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
import { MessageBanner } from '../components/MessageBanner';

import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';

export const SignupScreen = () => {
  const { signUpWithFirebaseEmail, signUpWithFirebaseGoogle } = useActions();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const signUpWithEmailAndPassword = () => {
    signUpWithFirebaseEmail({ email, password });

    setSuccess('User signed up succesfully');
    setEmail('');
    setPassword('');
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  };

  const signupWithGooglePopup = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;

        if (user) {
          signUpWithFirebaseGoogle(user);

          setSuccess('User signed up succesfully');
          setEmail('');
          setPassword('');
          setTimeout(() => {
            navigation.navigate('Home');
          }, 2000);
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;

        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        setError(errorMessage);
      });
  };

  return (
    <>
      <TopBar
        align='stretch'
        style={{ marginBottom: 20 }}
        iconsActive={false}
      />
      {error ? (
        <MessageBanner
          message={error ? `${error}` : `Signed up successfully`}
          delay={2000}
          backgroundColor={TYPOGRAPHY.COLOR.BrandRed}
        />
      ) : null}
      {success ? (
        <MessageBanner
          message={success ? `${success}` : `Signed up successfully`}
          delay={2000}
          backgroundColor={TYPOGRAPHY.COLOR.Success}
        />
      ) : null}
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
        <TextInput
          theme={{
            colors: { primary: '#121212' },
          }}
          mode='outlined'
          label='Firstname'
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          autoComplete=''
          disabled
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
          disabled
          style={[styles.textInput, { backgroundColor: '#FFF' }]}
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
            onPress={signUpWithEmailAndPassword}>
            <Text>SIGNUP WITH EMAIL</Text>
          </Button>
          <HorizontalRule
            text='or'
            style={{ marginVertical: GLOBAL.SPACING.md, width: '100%' }}
          />
          {Platform.OS === 'web' && (
            <>
              <Button
                style={{ borderRadius: 0, width: '100%' }}
                color='#e7230d'
                mode='contained'
                onPress={signupWithGooglePopup}>
                <Text>SIGNUP WITH GOOGLE</Text>
              </Button>
              <HorizontalRule
                text='or'
                style={{ marginVertical: GLOBAL.SPACING.md, width: '100%' }}
              />
            </>
          )}

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
