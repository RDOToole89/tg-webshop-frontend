import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { countDownTimer } from '../utils/computeTime';

interface iDealCountDown {
  title: string;
}

export const DealCountDown = ({ title }: iDealCountDown) => {
  const [time, setTime] = useState(countDownTimer());

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(countDownTimer());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={[styles.dealCard, GLOBAL.SHADOWS.shadowMedium]}>
      <Text style={[TYPOGRAPHY.FONT.subtitle, styles.dealTitle]}>{title}</Text>
      <Text
        style={
          TYPOGRAPHY.FONT.h2
        }>{`${time.hoursLeft} : ${time.minutesLeft} : ${time.secondsLeft}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dealCard: {
    top: -26,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    backgroundColor: 'white',
  },
  dealTitle: {
    color: TYPOGRAPHY.COLOR.BrandRed,
    paddingTop: GLOBAL.SPACING.md,
    fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
    textTransform: 'uppercase',
  },
});
