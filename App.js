
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import TaskScreen from './src/screens/tasks';

 const App = () =>{
  return (
    <SafeAreaView style={styles.app}>
        <TaskScreen  />
    </SafeAreaView>
      
      
  );
};

const styles = StyleSheet.create({
 app:{
  flex:1,
   backgroundColor: '#f6f6f6'
 }
});

export default App;