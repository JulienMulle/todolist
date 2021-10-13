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
            <FlatList 
            ListHeaderComponent={<Header />}
            data={tasks}
            //si je n'ai pas d'id, j'utilise la fonction de keyExtractore qui va recevoir item qui a l'index du tableau, avec la methode toString, on aura un index unique parce que chaques index dans un tableau est unique

            keyExtractor={(item, index) =>index.toString()}
            renderItem={renderItem}
            />
    )
}
