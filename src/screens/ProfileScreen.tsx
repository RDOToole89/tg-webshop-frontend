//@ts-nocheck
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/navigation';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { DefaultButton } from '../global/elements/buttons';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { ReferenceBar } from '../components/ReferenceBar';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import { Button } from 'react-native-paper';
import { Modal } from '../global/elements/Modal';
import { PressableText } from '../global/elements/PressableText';

export const ProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const loggedIn = false;
  const userName = 'Roibin';
  const email = 'roibinotoole@gmail.com';

  return (
    <ScrollView style={styles.container}>
      {loggedIn ? (
        <>
          <Text style={TYPOGRAPHY.FONT.h1}>{userName}</Text>
          <Text style={TYPOGRAPHY.FONT.subtitle}>{email}</Text>
        </>
      ) : (
        <Text style={TYPOGRAPHY.FONT.h1}>Hi There!</Text>
      )}

      {!loggedIn && (
        <>
          <Text
            style={[
              TYPOGRAPHY.FONT.subtitle,
              { marginBottom: GLOBAL.SPACING.md },
            ]}>
            If you log in you will have access to all the crappy games your
            heart desires, you will also be able to track your orders and buy
            even more lousy games and consoles!
          </Text>

          <DefaultButton
            style={{
              width: 140,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingHorizontal: 15,
            }}
            title='login'
            onClick={() => navigation.navigate('LoginStack')}
            icon={
              <MaterialIcon
                size='large'
                name='person'
                color={TYPOGRAPHY.COLOR.BrandBlack}
              />
            }
          />
        </>
      )}

      <ReferenceBar iconName='person' barText='Account' routeString='Home' />
      <Modal
        activator={({ handleOpen }) => (
          <ReferenceBar
            onClick={handleOpen}
            iconName='phone'
            barText='Customer Service'
            routeString='Home'
          />
        )}>
        <View style={[styles.notificationBox, GLOBAL.SHADOWS.shadowLight]}>
          <Text
            style={{
              fontSize: GLOBAL.FONT_SIZES.md,
              color: TYPOGRAPHY.COLOR.BrandBlack,
            }}>
            How can we help you?
          </Text>
          <ReferenceBar
            modalBar={true}
            barText='Return or cancel'
            iconName='arrow-right'
            color={TYPOGRAPHY.COLOR.BrandRed}
          />
          <ReferenceBar
            modalBar={true}
            barText='Payments'
            iconName='arrow-right'
            color={TYPOGRAPHY.COLOR.BrandRed}
          />
          <ReferenceBar
            modalBar={true}
            barText='Orders'
            iconName='arrow-right'
            color={TYPOGRAPHY.COLOR.BrandRed}
          />
        </View>
      </Modal>
      <ReferenceBar iconName='receipt' barText='Orders' routeString='Home' />
      <ReferenceBar
        iconName='pending-actions'
        barText='Invoices'
        routeString='Home'
      />

      <Modal
        activator={({ handleOpen }) => (
          <ReferenceBar
            onClick={handleOpen}
            iconName='feedback'
            barText='Feedback about the app'
            routeString='Home'
          />
        )}>
        <View style={[styles.notificationBox, GLOBAL.SHADOWS.shadowLight]}>
          <Text
            style={{
              fontSize: GLOBAL.FONT_SIZES.md,
              color: TYPOGRAPHY.COLOR.BrandBlack,
              textAlign: 'center',
            }}>
            What is it about?
          </Text>
          <ReferenceBar
            modalBar={true}
            barText='Help with app problems'
            iconName='arrow-right'
            color={TYPOGRAPHY.COLOR.BrandRed}
          />
          <ReferenceBar
            modalBar={true}
            barText='Tips for the app creators'
            iconName='arrow-right'
            color={TYPOGRAPHY.COLOR.BrandRed}
          />
          <ReferenceBar
            modalBar={true}
            barText='An aricle or order'
            iconName='arrow-right'
            color={TYPOGRAPHY.COLOR.BrandRed}
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    paddingTop: GLOBAL.SPACING.xxxl,
    paddingHorizontal: GLOBAL.SPACING.md,
  },
  notificationBox: {
    position: 'relative',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: GLOBAL.SPACING.lg,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});
