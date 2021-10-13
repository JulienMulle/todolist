import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

export default function TaskForm() {
    const [newTask, setNewTask] = useState();

    const onChangeText= (val) => {
        setNewTask(val)
    }

    const onAddTask= () => {

    }
    
    return (
        <View>
            <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={newTask}
            placeholder="Nouvelle Tâche"
            />
            <Button 
                title="Ajouter"
                onPress={onAddTask}
                color="blue"
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