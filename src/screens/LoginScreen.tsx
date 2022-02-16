//@ts-nocheck
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

export const LoginScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <>
      <TopBar align='flex-start' style={{ marginBottom: 20 }} />
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
        <PressableText
          text='Forgot password?'
          onPress={() => console.log('forgot password')}
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
          style={{ borderRadius: 0, color: TYPOGRAPHY.COLOR.BrandRed }}
          color='#e7230d'
          mode='contained'
          onPress={() => console.log(email, password)}>
          <Text style={[GLOBAL.TEXT.Bold, { color: TYPOGRAPHY.COLOR.Default }]}>
            SIGN IN
          </Text>
        </Button>
        <HorizontalRule
          text='or'
          style={{ marginVertical: GLOBAL.SPACING.md }}
        />
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
