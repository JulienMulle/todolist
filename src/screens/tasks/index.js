import React, {useState} from 'react';
import { FlatList } from 'react-native';
import Header from '../../components/Header';
import TaskForm from './TaskForm';
import TaskTile from './TaskTile';
import FloatinBtn from '../../components/FloattingBtn';

export default function TaskScreen() {
    //state pour afficher le formulaire
    const [isFormVisible, setIsFormVisible] = useState(false)
    // Liste de taches
    //State pour garder en mémoire les taches
    const [tasks, setTasks] = useState([])

    //item sera un élément du tableau : {title: "Hello l'ami du bon gout !", isCompleted: false}
    const renderItem = ({item}) => {
        return <TaskTile task={item}
         onUpdateTask={onUpdateTask} 
         onDeleteTask={onDeleteTask}
         />
    }
    
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
    
    const onDeleteTask = (id) => {
        let newTasks = []
        tasks.forEach(t=>{
            if (t.id !== id) 
            {
            newTasks.push(t)
            return
            }
        })
        setTasks(newTasks)

    }

    const _toggleForm = () => {
        setIsFormVisible(!isFormVisible)
    }

    return ( 
        <>
            <FlatList 
            //scroll infini avec chargement des données
            //onEndReached={()=> loadData}
            ListHeaderComponent={
            <>
            <Header />
            {isFormVisible && <TaskForm onAddTask={onAddTask}/>}
            </>
            }
            contentContainerStyle={{flexGrow:1}}
            data={tasks}
            //si je n'ai pas d'id, j'utilise la fonction de keyExtractore qui va recevoir item qui a l'index du tableau, avec la methode toString, on aura un index unique parce que chaques index dans un tableau est unique

            keyExtractor={(_item, index) =>index.toString()}
            renderItem={renderItem}
            />
            <FloatinBtn toggle={_toggleForm} isOpen={isFormVisible}/>
        </>
    )
}

