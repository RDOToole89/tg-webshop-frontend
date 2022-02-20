import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { GLOBAL } from '../styles/global';
import uuid from 'react-native-uuid';

export const PickerGenerator = ({
  data,
  defaultValue,
}: {
  data: string[];
  defaultValue?: string;
}) => {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <Picker
      style={{ marginBottom: GLOBAL.SPACING.md }}
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
      {data?.map((x: any, i) =>
        defaultValue && !i ? (
          <Picker.Item
            key={uuid.v4().toString()}
            label={defaultValue}
            value={''}
          />
        ) : (
          <Picker.Item key={uuid.v4().toString()} label={x} value={x} />
        )
      )}
    </Picker>
  );
};
