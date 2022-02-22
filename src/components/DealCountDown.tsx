import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { countDownTimer } from '../utils/computeTime';

type DealCountDown = {
  title: string;
};

export const DealCountDown = ({ title }: DealCountDown) => {
  const [time, setTime] = useState(countDownTimer());
  // const timeRef = useRef(countDownTimer());

  useEffect(() => {
    let timer = setInterval(() => {
      // timeRef.current = countDownTimer();
      setTime(countDownTimer());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.dealCard}>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: Platform.OS === 'ios' ? 0 : 8,
  },
  dealTitle: {
    color: TYPOGRAPHY.COLOR.BrandRed,
    paddingTop: GLOBAL.SPACING.md,
    fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
    textTransform: 'uppercase',
  },
});
