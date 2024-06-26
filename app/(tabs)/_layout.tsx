import { Tabs, router } from 'expo-router'
import React, { useState } from 'react'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { Button, Image, StyleSheet, View, Text, TextInput, Pressable, Dimensions } from 'react-native'

export default function TabLayout() {
    const colorScheme = useColorScheme()
    const [loggedIn, setLoggedIn] = useState(false)
    const [phoneNum, setPhoneNum] = useState('')
    const [hasRide, setHasRide] = useState(true)

    const studentLogin = () => {
        setLoggedIn(true)
    }

    const nonStudentLogin = () => {
        if (!(phoneNum === '')) {
            setLoggedIn(true)
        }
    }

    const showCurrentRide = () => {
        router.replace('/ride/currentRide')
    }

    if (loggedIn) {
        return (
            <>
                {hasRide && (
                    <Pressable style={{ alignSelf: 'stretch' }} onPress={showCurrentRide}>
                        <View style={{ height: 64, backgroundColor: 'limegreen' }} />
                    </Pressable>
                )}
                <Tabs
                    screenOptions={{
                        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                        headerShown: false,
                    }}>
                    <Tabs.Screen
                        name='calendar'
                        options={{
                            title: 'Calendar',
                            tabBarIcon: ({ color }) => (
                                <TabBarIcon name='calendar-outline' color={color} />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name='index'
                        options={{
                            title: 'Home',
                            tabBarIcon: ({ color }) => (
                                <TabBarIcon name='home-outline' color={color} />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name='settings'
                        options={{
                            title: 'Settings',
                            tabBarIcon: ({ color }) => (
                                <TabBarIcon name='settings-outline' color={color} />
                            ),
                        }}
                    />
                </Tabs>
            </>
        )
    } else {
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.roamImage}
                        source={require('@/assets/images/logo.jpg')}
                    />
                    <Text style={styles.roamImageText}>Roam</Text>
                </View>
                <View style={styles.students}>
                    <Text style={styles.helperText}>Students</Text>
                    <Button title='Sign In With Google' onPress={studentLogin} />
                </View>
                <View style={styles.nonStudents}>
                    <Text style={styles.helperText}>Non-Students</Text>
                    <TextInput
                        placeholder='Phone Number'
                        style={styles.phoneNumberInput}
                        placeholderTextColor='#C0C0C0'
                        onChange={text => setPhoneNum(text as unknown as string)}
                    />
                    <Button
                        title='Enter'
                        onPress={nonStudentLogin}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignSelf: 'center',
        marginTop: 48,
        maxWidth: 300,
        marginHorizontal: 'auto'
    },

    roamImage: {
        aspectRatio: 1,
        width: 'auto',
        resizeMode: 'contain'
    },

    helperText: {
        color: Colors.light.tint,
        textAlign: 'center',
        marginBottom: 8
    },

    roamImageText: {
        color: Colors.light.tint,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 700,
        fontSize: 36
    },

    students: {
        marginTop: 18
    },

    nonStudents: {
        marginTop: 36
    },

    phoneNumberInput: {
        backgroundColor: 'white',
        padding: 4,
    }
})