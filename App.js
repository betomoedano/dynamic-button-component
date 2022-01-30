import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/MyButton';

export default function App() {
  return (
    <View style={styles.container}>
      <MyButton 
        onPress={() => {alert('primary button pressed')}} 
        type={"primary"} 
        size={"large"} 
        label={"Primary"}
      />
      <MyButton 
        onPress={() => {alert('hello')}} 
        type={"secondary"} 
        size={"large"} 
        label={"Success"}
        rounded={'large'}
      />
      <MyButton 
        onPress={() => {alert('secondary button pressed')}} 
        type={"secondary"} 
        size={"medium"} 
        label={"Secondary"}
        rounded={'small'}
      />
      <MyButton 
        onPress={() => {alert('hello')}} 
        type={"accent"} 
        size={"medium"} 
        label={"Accent"}
        rounded={'medium'}
      />
      <MyButton 
        onPress={() => {alert('hello')}} 
        type={"info"} 
        size={"medium"} 
        label={"Info"}
        rounded={'large'}
      />
      <MyButton 
        onPress={() => {alert('hello')}} 
        type={"error"} 
        size={"small"} 
        label={"Error"}
      />
      <MyButton 
        onPress={() => {alert('hello')}} 
        type={"warning"} 
        size={"small"} 
        label={"Warning"}
        rounded={'medium'}
      />


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
