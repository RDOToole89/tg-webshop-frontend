import { View, Text } from 'react-native';
import { TYPOGRAPHY } from '../global/styles/typography';

type TagMapper = {
  tags: string[];
};

export const TagMapper = ({ tags }: TagMapper) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {tags.map((tag, i) => {
        if (i === tags.length - 1) {
          return (
            <Text style={TYPOGRAPHY.FONT.subtitle} key={tag}>
              {tag}
            </Text>
          );
        }
        return (
          <Text style={TYPOGRAPHY.FONT.subtitle} key={tag}>
            {tag} |
          </Text>
        );
      })}
    </View>
  );
};
