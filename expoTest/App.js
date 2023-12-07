import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewTest  from './ViewTest';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Text style={styles.text}> React Native Expo Test!</Text>
      <StatusBar style="auto" />
      <ViewTest />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:"3rem",
    color:"blue"
  },
  text: {
    fontSize:25, 
    color:'blue',
    fontFamily:'sans-serif'
  }
});
