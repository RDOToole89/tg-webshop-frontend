import { Picker } from '@react-native-picker/picker';
import { GLOBAL } from '../styles/global';

interface IPickerGenerator {
  data: string[];
  defaultValue?: string;
  selectedPlatform: any;
  setSelectedPlatform: (platform: string) => void;
}

export const PickerGenerator = ({
  data,
  defaultValue,
  selectedPlatform,
  setSelectedPlatform,
}: IPickerGenerator) => {
  return (
    <Picker
      style={{ marginBottom: GLOBAL.SPACING.md }}
      selectedValue={selectedPlatform}
      onValueChange={(itemValue: string, itemIndex: number) => {
        console.log(itemValue);
        setSelectedPlatform(itemValue);
      }}>
      {data?.map((x: any, i) =>
        defaultValue && !i ? (
          <Picker.Item key={Math.random()} value={''} label={defaultValue} />
        ) : (
          <Picker.Item key={Math.random()} label={x} value={x} />
        )
      )}
    </Picker>
  );
};
