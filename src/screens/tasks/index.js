import React, {useState} from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import Header from '../../components/Header';
import TaskForm from './TaskForm';
import TaskTile from './TaskTile';

export default function TaskScreen() {
    // Liste de taches
    //State pour garder en mémoire les taches
    const [tasks, setTasks] = useState([])

    //item sera un élément du tableau : {title: "Hello l'ami du bon gout !", isCompleted: false}
    const renderItem = ({item}) => {
        return <TaskTile task={item} onUpdateTask={onUpdateTask}/>
    }

    //ajouter une fonction pour ajouter une tache au state
    //passer cette foncgtion à notre form
    
    const onAddTask= (title) => {
        setTasks([...tasks,{
            id: Date.now(),
            title,
            isCompleted: false
        }])
    }

    const onUpdateTask = (id) =>{
        let newTasks = []

        tasks.forEach(t=>{
            if (t.id !== id) 
            {
                newTasks.push(t)
                return
            }
            newTasks.push({
                id,
                title : t.title,
                isCompleted : !t.isCompleted
            })
        })

        setTasks(newTasks)
    }
    //asyncStorage

    return ( 
            <FlatList 
            //scroll infini avec chargement des données
            //onEndReached={()=> loadData}
            ListHeaderComponent={
            <>
            <Header />
            <TaskForm onAddTask={onAddTask}/>
            </>
            }
            contentContainerStyle={{flexGrow:1}}
            data={tasks}
            //si je n'ai pas d'id, j'utilise la fonction de keyExtractore qui va recevoir item qui a l'index du tableau, avec la methode toString, on aura un index unique parce que chaques index dans un tableau est unique

            keyExtractor={(item, index) =>index.toString()}
            renderItem={renderItem}
            />
    )
}
