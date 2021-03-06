import React from 'react'
import { Text, Image, StyleSheet,View, Pressable } from 'react-native';

import outline_circle from "../../../assets/Icons/outline_circle.png";
import check_circle from "../../../assets/Icons/check_circle.png";
import icon_bin from "../../../assets/Icons/icon_bin.png";

export default function TaskTile({task, onUpdateTask, onDeleteTask}) {

    const onChageStatus = () =>{
        onUpdateTask(task.id)
    }

    const _onDeleteTask = ()=>{
        onDeleteTask(task.id)
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={onChageStatus}
            style={styles.subContainer}>
                <Image
                style={styles.check}
                source={task.isCompleted ? check_circle :outline_circle   }
                />
                <Text style={styles.title}>{task.title}</Text>  
            </Pressable> 
            <Pressable
            onPress={_onDeleteTask}
            >   
                <Image
                style={styles.check}
                source={icon_bin}
                />
            </Pressable>           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        margin:10,
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"snow",
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        justifyContent: "space-between",
    },
    subContainer:{
        
        flexDirection:"row",
        alignItems:"center",
    },
    title:{
        marginLeft:20,
        fontSize: 16,
        maxWidth: "80%"
    },
    check:{
        width:26,
        height:26,
    }
})

