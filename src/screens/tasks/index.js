import React, {useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//components
import { getTasks, toggleTask, deleteTask } from '../../redux/store';
import Counter from '../../components/Counter';
import Header from '../../components/Header';
import TaskForm from './TaskForm';
import TaskTile from './TaskTile';


export default function TaskScreen() {
    const tasks = useSelector(getTasks);
    const dispatch = useDispatch();

    //item sera un élément du tableau : {title: "Hello l'ami du bon gout !", isCompleted: false}
    const renderItem = ({item}) => {
        return <TaskTile task={item}
         onUpdateTask={onUpdateTask} 
         onDeleteTask={onDeleteTask}
         />
    };
    const onUpdateTask = (id) =>{
        dispatch(toggleTask(id))
    };
    const onDeleteTask = (id) => {
        dispatch(deleteTask(id))
    };

    return ( 
        <>
            <FlatList 
            //scroll infini avec chargement des données
            //onEndReached={()=> loadData}
            ListHeaderComponent={
            <>
            <Header />
            <View style={styles.counter}>
            <Counter nb={tasks.length} title={"Tâches crées"}/>
            {/*je ne veux que les elements qui on le status isCompleted */}
            <Counter nb={tasks.filter(t =>t.isCompleted === true).length} title={"Tâches éffectuées"}/>
            </View>
            </>
            }
            contentContainerStyle={{flexGrow:1}}
            data={tasks}
            //si je n'ai pas d'id, j'utilise la fonction de keyExtractore qui va recevoir item qui a l'index du tableau, avec la methode toString, on aura un index unique parce que chaques index dans un tableau est unique

            keyExtractor={(_item, index) =>index.toString()}
            renderItem={renderItem}
            />
            <TaskForm />
            
        </>
    )
}

const styles = StyleSheet.create({
    counter:{
        flexDirection:"row",
        justifyContent: "space-between",
        marginBottom:10,
        marginTop:10,
        paddingHorizontal:20
    }
})
