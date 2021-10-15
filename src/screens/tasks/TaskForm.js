import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';

import { addTask } from '../../redux/store';

export default function TaskForm() {

    const [newTask, setNewTask] = useState("");
    const dispatch = useDispatch()

    const onChangeText= (val) => {
        setNewTask(val)
    };

    const onAddNewTask = () => {
        if (newTask === "") return
        dispatch(addTask(newTask))       
        setNewTask("")
    };


const twoFunction = () => {
    onAddNewTask();
    Keyboard.dismiss();
}
    return (
        //penser à remplacer view par KeyboardAvoidingView 
        
        <View
        style={styles.container}
        >
            <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={newTask}
            placeholder=" Nouvelle Tâche"
            />
            <Button 
                title="Ajouter"
                onPress={twoFunction} 
                color="grey"
                borderRadius="15"
            />
        </View>     
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom: 10,
        marginLeft:10,
        marginRight:10
        //mon padding stope mon app, chercher une solution
        
    },
    input:{
        backgroundColor:"snow",
        borderColor:"black",
        borderWidth: 1,
        borderRadius: 5,
        width: "70%",
        height: 40
    },
    btn:{
        color:"snow",
        borderRadius:15,
    }
})