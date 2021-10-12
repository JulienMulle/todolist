import React from 'react';
import { StyleSheet, Text } from 'react-native';

const days = ["Dimanche", "Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
const month = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]

export default function Header() {
    const date = new Date()
    return (
        <>
            <Text> {`${days[date.getDay()]} ${date.getDate()} ${month[date.getMonth()]}`}</Text>
        </>
    )
}
