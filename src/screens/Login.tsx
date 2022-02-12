import { View, Text, StyleSheet } from 'react-native';

export const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
