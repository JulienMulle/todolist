
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';

//components
import { store } from './src/redux/store';
import TaskScreen from './src/screens/tasks';


 const App = () =>{
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.app}>
        <TaskScreen  />
      </SafeAreaView>
    </Provider>     
  );
};

const styles = StyleSheet.create({
 app:{
  flex:1,
   backgroundColor: '#f6f6f6'
 }
});

export default App;