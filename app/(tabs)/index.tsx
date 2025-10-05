import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function HomeScreen() {
  const handlePress = () => {
    Alert.alert('Salam!', 'Buttona kliklədiniz 🎉');
  };

  return (
    <View style={styles.container}>
      <Text>Try editing me! 🎉</Text>
      <Button title="Click me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16, // Text və Button arası məsafə
  },
});
