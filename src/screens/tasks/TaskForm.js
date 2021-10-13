import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default function TaskForm() {
    const [newTask, setNewTask] = useState();

    const onChangeText= (val) => {
        setNewTask(val)
    }
    return (
        <View>
            <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={newTask}
            placeholder="Nouvelle Tâche"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderColor:"black",
        borderWidth:1,
    },
})