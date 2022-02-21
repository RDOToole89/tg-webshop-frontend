import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { StarRatings } from './StarRatings';

export type ReviewCard = {
  userNameTest: string;
  reviewScore: number;
  title: string;
  content: string;
  likes: number;
};

export const ReviewCard = ({
  userNameTest,
  reviewScore,
  content,
  title,
  likes,
}: ReviewCard) => {
  return (
    <View style={{ marginBottom: GLOBAL.SPACING.lg }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Ionicons
          name='ios-person-circle'
          size={30}
          color={TYPOGRAPHY.COLOR.BrandBlack}
        />
        <Text
          style={{
            marginLeft: GLOBAL.SPACING.sm,
            color: TYPOGRAPHY.COLOR.BrandRed,
            fontFamily: TYPOGRAPHY.FONT.PrimaryMedium,
          }}>
          {userNameTest}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: GLOBAL.SPACING.sm,
        }}>
        <StarRatings rating={reviewScore} />
        <Text style={{ marginLeft: GLOBAL.SPACING.sm }}>Verified Purchase</Text>
      </View>

      <Text
        style={[
          TYPOGRAPHY.FONT.h3,
          { fontFamily: TYPOGRAPHY.FONT.PrimaryBold },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          TYPOGRAPHY.FONT.subtitle,
          { marginBottom: GLOBAL.SPACING.sm },
        ]}>{`Reviewed in The Netherlands on March 11, 2021`}</Text>
      <Text style={TYPOGRAPHY.FONT.body}>{content}</Text>
      <Text
        style={[TYPOGRAPHY.FONT.subtitle, { marginBottom: GLOBAL.SPACING.sm }]}>
        {`${likes} people found this helpful`}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <AntDesign name='like1' size={18} color='black' />
      </View>
    </View>
  );
};
