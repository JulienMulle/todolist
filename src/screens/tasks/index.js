import React, {useState} from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import Header from '../../components/Header';

export default function TaskScreen() {
    // Liste de taches
    //State pour garder en mémoire les taches
    const [tasks, setTasks] = useState([
        {title: "Hello l'ami du bon gout !", isCompleted: false}
    ])

    //item sera un élément du tableau : {title: "Hello l'ami du bon gout !", isCompleted: false}
    const renderItem = ({item}) => {
        return <Text>{item.title}</Text>
    }
    //asyncStorage

    return (
        <>
            <Header />
            <FlatList 
            data={tasks}
            keyExtractor={(item, index) =>index.toString()}
            renderItem={renderItem}/>
        </>
    )
}
