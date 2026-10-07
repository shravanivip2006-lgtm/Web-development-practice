import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const getMessage = () => {
    if (count === 0) return 'Start counting! 🚀';
    if (count < 5) return 'Keep going! 😊';
    if (count < 10) return 'Great job! 🔥';
    return 'Amazing! You reached 10+! 🎉';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Click Counter</Text>

      <Text style={styles.count}>{count}</Text>

      <Text style={styles.message}>{getMessage()}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="➖ Decrease"
          onPress={() => setCount(count - 1)}
        />

        <Button
          title="➕ Increase"
          onPress={() => setCount(count + 1)}
        />
      </View>

      <Button
        title="🔄 Reset"
        onPress={() => setCount(0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  count: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  message: {
    fontSize: 18,
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 20,
  },
});