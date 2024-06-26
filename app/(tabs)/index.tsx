import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Home() {

    return (
        <View style={styles.view}>
            <Text
                style={styles.text}
            >
                Welcome, Dhruv!
            </Text>
            <TextInput
                placeholderTextColor='#C0C0C0'
                placeholder='Pickup Address'

            />
            <TextInput
                placeholderTextColor='#C0C0C0'
                placeholder='Dropoff Address'
            />
            <Text
                style={styles.text}
            >
                June 30, 2024 - 7:00 PM
            </Text>
            <TextInput
                placeholderTextColor='#C0C0C0'
                placeholder='Notes'
            />
            <Button
                title='Buy with Payment Provider'

            />
            <Button
                title='Submit'
            />
            <Button
                title='Go to current Ride'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        maxWidth: 300
    },

    view: {
        marginHorizontal: 'auto',
        marginTop: 32
    },

    text: {
        fontSize: 16
    }
})