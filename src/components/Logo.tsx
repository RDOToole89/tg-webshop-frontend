import { ImageSourcePropType } from 'react-native';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
import logo from '../../assets/lamestop-logo-transparent.png';

interface ILogo {
  width: number;
  height: number;
  source?: ImageSourcePropType;
}

export const Logo = ({ width, height, source }: ILogo) => {
  return (
    <ResponsiveImage
      srcWidth={width}
      srcHeight={height}
      source={source ? source : logo}
    />
  );
};
