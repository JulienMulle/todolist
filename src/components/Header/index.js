import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Header() {
    return (
        <>
            <Text> {Date.now().toString()}</Text>
        </>
    )
}
