import React from 'react'
import { Text, Image, StyleSheet,View } from 'react-native';

import outline_circle from "../../../assets/Icons/outline_circle.png";
import icon_bin from "../../../assets/Icons/icon_bin.png";

export default function TaskTile({task}) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image
                style={styles.check}
                source={outline_circle}
                />
                <Text style={styles.title}>{task.title}</Text>
            </View>    
                <Image
                style={styles.check}
                source={icon_bin}
                />           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        padding:20,
        justifyContent: "space-between",
    },
    subContainer:{
        flexDirection:"row",
        alignItems:"center",
    },
    title:{
        marginLeft:20,
        fontSize: 16,
    },
    check:{
        width:26,
        height:26,
    }
})

