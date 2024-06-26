import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function CurrentRide() {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTextHeader}>Pickup:</Text>
                    <Text style={styles.infoText}>4321 Hartwick Rd, College Park, MD 207420, USA</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTextHeader}>Dropoff:</Text>
                    <Text style={styles.infoText}>8204 Baltimore Ave, College Park, MD 207420, USA</Text>

                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTextHeader}>Notes:</Text>
                    <Text style={styles.infoText}>UMD</Text>
                </View>
            </View>

            <Image
                source={require('@/assets/images/mapDemo.png')}
                style={styles.map}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 'auto',
        maxWidth: 300,
        marginTop: 32
    },

    map: {
        aspectRatio: 1,
        width: 300,
        height: 300,
        marginHorizontal: 'auto'
    },

    infoContainer: {
        marginVertical: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    infoText: {
        fontSize: 16,
        width: '70%'
    },

    infoTextHeader: {
        fontSize: 16,
        width: '30%'
    }
})