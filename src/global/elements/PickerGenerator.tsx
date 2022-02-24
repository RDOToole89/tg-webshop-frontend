import { Picker } from '@react-native-picker/picker';
import { GLOBAL } from '../styles/global';
import uuid from 'react-native-uuid';

export const PickerGenerator = ({
  data,
  defaultValue,
  selectedPlatform,
  setSelectedPlatform,
}: {
  data: string[];
  defaultValue?: string;
  selectedPlatform: any;
  setSelectedPlatform: (platform: string) => void;
}) => {
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
          <Picker.Item
            key={uuid.v4().toString()}
            value={''}
            label={defaultValue}
          />
        ) : (
          <Picker.Item key={uuid.v4().toString()} label={x} value={x} />
        )
      )}
    </Picker>
  );
};
