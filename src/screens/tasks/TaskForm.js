import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

export default function TaskForm() {
    const [newTask, setNewTask] = useState();

    const onChangeText= (val) => {
        setNewTask(val)
    }
    return (
        <View>
            <TextInput 
            style={{}}
            onChangeText={onChangeText}
            value={newTask}
            />
        </View>
    )
}
