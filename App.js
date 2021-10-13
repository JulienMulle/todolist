
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import TaskScreen from './src/screens/tasks';

 const App = () =>{
  return (
    <SafeAreaView style={{flex:1}}>
        <TaskScreen />
    </SafeAreaView>
      
      
  );
};

const styles = StyleSheet.create({
 
});

export default App;