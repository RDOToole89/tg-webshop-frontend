import {
  Pressable,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
import image from '../../assets/oldschool-nes.png';
import { StarRatings } from '../components/StarRatings';
import { HorizontalRule } from '../global/elements/HorizontalRule';
import { Modal } from '../global/elements/Modal';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/navigation';
import { NotificationBox } from '../components/NotificationBox';

export const ReviewSrcreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const userNameTest = 'Roibin OToole';

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior='padding' style={GLOBAL.LAYOUT.container}>
        <View
          style={[
            {
              padding: GLOBAL.SPACING.sm,
              backgroundColor: TYPOGRAPHY.COLOR.BrandRed,
            },
            GLOBAL.LAYOUT.rowCenter,
          ]}>
          <Ionicons name='ios-person-circle' size={30} color='black' />
          <Text
            style={[
              TYPOGRAPHY.FONT.default,

              {
                marginHorizontal: GLOBAL.SPACING.sm,
                color: TYPOGRAPHY.COLOR.Default,
              },
            ]}>
            {userNameTest}
          </Text>
          <Pressable>
            <Text
              style={[
                TYPOGRAPHY.FONT.default,
                {
                  color: TYPOGRAPHY.COLOR.Default,
                  fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
                },
              ]}>
              Edit
            </Text>
            <View style={GLOBAL.LAYOUT.rowCenter}></View>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', padding: GLOBAL.SPACING.xxl }}>
          <View
            style={{ width: 100, height: 100, marginRight: GLOBAL.SPACING.lg }}>
            <ResponsiveImage source={image} srcHeight={200} srcWidth={200} />
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text>Old School Nintendo Console</Text>
            <StarRatings size='extraLarge' rating={5} />
          </View>
        </View>
        <HorizontalRule ruleWidth={3} />
        <View style={{ padding: GLOBAL.SPACING.xxl }}>
          <Text style={TYPOGRAPHY.FONT.h2}>Add a title</Text>
          <Text style={TYPOGRAPHY.FONT.subtitle}>
            Sum up your review in one line
          </Text>
          <TextInput
            placeholder="What's most important to know?"
            style={TYPOGRAPHY.FONT.input}
          />
        </View>
        <HorizontalRule ruleWidth={3} />
        <View style={{ padding: GLOBAL.SPACING.xxl }}>
          <Text style={TYPOGRAPHY.FONT.h2}>Add a written review</Text>
          <Text style={TYPOGRAPHY.FONT.subtitle}>How was your experience?</Text>
          <TextInput
            multiline
            numberOfLines={8}
            placeholder='What did you like or dislike about the product?'
            style={[
              TYPOGRAPHY.FONT.input,
              { padding: GLOBAL.SPACING.md, height: 100 },
            ]}
          />
        </View>
        <HorizontalRule ruleWidth={3} />
        <View style={{ padding: GLOBAL.SPACING.xxl }}>
          <Modal
            activator={({ handleOpen }) => (
              <>
                <Button
                  style={{ marginBottom: GLOBAL.SPACING.md }}
                  color='#e7230d'
                  icon={() => (
                    <MaterialIcons name='gamepad' size={16} color='black' />
                  )}
                  mode='contained'
                  onPress={() => {
                    handleOpen();
                    setTimeout(() => {
                      navigation.goBack();
                    }, 2000);
                  }}>
                  submit
                </Button>
              </>
            )}>
            <NotificationBox notificationText=' Review submitted - Thank you!' />
          </Modal>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
