import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

export default function TaskForm({onAddTask}) {

    const [newTask, setNewTask] = useState("");

    const onChangeText= (val) => {
        setNewTask(val)
    };

    const onAddNewTask = () => {
        if (newTask === "") return
        onAddTask(newTask)
        setNewTask("")
    };



    return (
        <View
        style={styles.container}
        >
            <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={newTask}
            placeholder="Nouvelle Tâche"
            />
            <Button 
                title="Ajouter"
                onPress={onAddNewTask}
                color="blue"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop: 10
        //mon padding stope mon app, chercher une solution
        //paddingHorizontal:"20",
    },
    input:{
        borderColor:"black",
        borderWidth: 1,
        borderRadius: 5,
        width: "70%",
        height: 40
    },
})