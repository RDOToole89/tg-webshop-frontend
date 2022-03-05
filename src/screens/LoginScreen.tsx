import { View, Text, StyleSheet, Platform } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import React, { useEffect, useRef, useState } from 'react';
import { HorizontalRule } from '../global/elements/HorizontalRule';
import { TYPOGRAPHY } from '../global/styles/typography';
import { TopBar } from '../components/TopBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/navigation';
import { PressableText } from '../global/elements/PressableText';
import { useActions } from '../hooks/useActions';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
import { MessageBanner } from '../components/MessageBanner';

export const LoginScreen = () => {
  const { signUpWithFirebaseGoogle } = useActions();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  let timeoutClear: NodeJS.Timeout;

  const signInWithCredentials = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        signUpWithFirebaseGoogle(user);

        setSuccess('User signed in succesfully');
        setEmail('');
        setPassword('');
        timeoutClear = setTimeout(() => {
          navigation.navigate('Home');
        }, 1000);

        console.log(timeoutClear);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError(`${errorMessage} errorCode: ${errorCode}`);
      });
  };

  const signinWithGooglePopup = () => {
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
          timeoutClear = setTimeout(() => {
            navigation.navigate('Home');
          }, 1000);
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

        setError(
          `${errorMessage} errorCode: ${errorCode} email: ${email} authType ${credential}`
        );
      });
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutClear);
    };
  }, [success]);

  return (
    <>
      <TopBar
        align='flex-start'
        style={{ marginBottom: 20 }}
        iconsActive={false}
      />
      {error ? (
        <MessageBanner
          message={error ? `${error}` : `Signed up successfully`}
          delay={999}
          backgroundColor={TYPOGRAPHY.COLOR.BrandRed}
        />
      ) : null}
      {success ? (
        <MessageBanner
          message={success ? `${success}` : `Signed up successfully`}
          delay={999}
          backgroundColor={TYPOGRAPHY.COLOR.Success}
        />
      ) : null}
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginBottom: 4 }}>
          <Text style={{ fontFamily: 'impact', fontSize: 14 }}>Welcome to</Text>
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
          <Text style={TYPOGRAPHY.FONT.subtitle}>
            Sign in to your LameStop account
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
          autoComplete='true'
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
          autoComplete='true'
          style={styles.textInput}
        />
        <PressableText
          text='Forgot password?'
          onPress={() => navigation.navigate('Home')}
        />
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
        <Button
          style={{ borderRadius: 0 }}
          color='#e7230d'
          mode='contained'
          onPress={() => signInWithCredentials(email, password)}>
          <Text style={[GLOBAL.TEXT.Bold, { color: TYPOGRAPHY.COLOR.Default }]}>
            SIGN IN WITH EMAIL
          </Text>
        </Button>
        <HorizontalRule
          text='or'
          style={{ marginVertical: GLOBAL.SPACING.md }}
        />
        {Platform.OS === 'web' && (
          <>
            <Button
              style={{ borderRadius: 0 }}
              color='#e7230d'
              mode='outlined'
              onPress={signinWithGooglePopup}>
              <Text
                style={[
                  GLOBAL.TEXT.Bold,
                  { color: TYPOGRAPHY.COLOR.DefaultSelected },
                ]}>
                SIGN IN WITH GOOGLE
              </Text>
            </Button>
            <HorizontalRule
              text='or'
              style={{ marginVertical: GLOBAL.SPACING.md }}
            />
          </>
        )}

        <Button
          style={{ borderRadius: 0, borderWidth: 1, borderColor: '#000' }}
          color='#fff'
          mode='contained'
          onPress={() => navigation.navigate('Signup')}>
          <Text style={GLOBAL.TEXT.Bold}>CREATE ACCOUNT</Text>
        </Button>
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
