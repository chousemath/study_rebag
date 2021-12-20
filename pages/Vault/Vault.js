import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function Vault() {
  return (
    <View style={styles.container}>
      <Text>Vault</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
