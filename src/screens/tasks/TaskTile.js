import React from 'react'
import { Text, Image, StyleSheet } from 'react-native';

import outline_circle from "../../../assets/Icons/outline_circle.png";
import icon_bin from "../../../assets/Icons/icon_bin.png";

export default function TaskTile({task}) {
    return (
        <>
        {/*voir doc reactnative /image pour les png et le style adequate */}
            <Image
            style={styles.check}
            source={outline_circle}
            />
            <Text>{task.title}</Text>
            <Image
            style={styles.check}
            source={icon_bin}
            />
        </>
    )
}

const styles = StyleSheet.create({
    check: {
        width:56,
        height:56,
    }
})

