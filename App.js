import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* This is the text you need for your assignment */}
      <Text>Hi! my name is Pedro Vieira</Text>
      
      <StatusBar style="auto" />
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