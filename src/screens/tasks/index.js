import React, {useState} from 'react';
import { StyleSheet, Text } from 'react-native';
import Header from '../../components/Header';

export default function TaskScreen() {
    // Liste de taches
    //State pour garder en mémoire les taches
    const [tasks, setTasks] = useState([
        {title: "Hello l'ami du bon gout !", isCompleted: false}
    ])
    //asyncStorage

    return (
        <>
            <Header />
            {tasks.map(t => <Text>{t.title}</Text>)}
        </>
    )
}
