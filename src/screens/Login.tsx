//@ts-nocheck
import { View, Text, StyleSheet } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { useState } from 'react';
import { HorizontalRule } from '../global/elements/HorizontalRule';
import { TYPOGRAPHY } from '../global/styles/typography';
import { TopBar } from '../components/TopBar';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TopBar align='flex-start' style={{ marginBottom: 20 }} />
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
            Sign in to your LameStop account
          </Text>
        </View>
        <TextInput
          theme={{
            colors: { primary: '#121212', underlineColor: 'transparent' },
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
            colors: { primary: '#121212', underlineColor: 'transparent' },
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
        <Button
          style={{ borderRadius: 0 }}
          color='#e7230d'
          mode='contained'
          onPress={() => console.log(email, password)}>
          <Text>SIGN IN</Text>
        </Button>
        <HorizontalRule
          text='or'
          style={{ marginVertical: GLOBAL.SPACING.md }}
        />
        <Button
          style={{ borderRadius: 0, boderColor: '#121212', borderWidth: 1 }}
          color='#fff'
          mode='contained'
          onPress={() => console.log('Sign')}>
          <Text>CREATE ACCOUNT</Text>
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
