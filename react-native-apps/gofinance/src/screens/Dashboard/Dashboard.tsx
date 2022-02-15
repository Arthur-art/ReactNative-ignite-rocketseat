import React from "react"
import { Text, View, StyleSheet } from "react-native"

export const Dashboard = ()=>{

    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})