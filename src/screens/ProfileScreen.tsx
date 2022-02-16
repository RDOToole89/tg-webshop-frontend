import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/navigation';
import { View, Text, StyleSheet } from 'react-native';
import { DefaultButton } from '../global/elements/buttons';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { ReferenceBar } from '../components/ReferenceBar';

export const ProfileScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={TYPOGRAPHY.FONT.h1}>Hi There!</Text>
      <Text
        style={[TYPOGRAPHY.FONT.subtitle, { marginBottom: GLOBAL.SPACING.md }]}>
        If you log in you will have access to all the crappy games your heart
        desires, you will also be able to track your orders and buy even more
        lousy games!
      </Text>
      <DefaultButton
        style={{ width: 120 }}
        title='login'
        onClick={() => navigation.navigate('LoginStack')}
      />
      <ReferenceBar iconName='person' barText='Account' routeString='Home' />
      <ReferenceBar iconName='person' barText='Orders' routeString='Home' />
      <ReferenceBar
        iconName='pending-actions'
        barText='Invoices'
        routeString='Home'
      />
      <ReferenceBar
        iconName='phone'
        barText='Customer Service'
        routeString='Home'
      />
      <ReferenceBar
        iconName='feedback'
        barText='Feedback about the app'
        routeString='Home'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    paddingTop: GLOBAL.SPACING.xxxl,
    paddingHorizontal: GLOBAL.SPACING.md,
  },
});
