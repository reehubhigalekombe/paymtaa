import React from "react";
import Navbar from "./Navbar";
import { View, StyleSheet } from "react-native";
export default function MainNav({children}: any) {
    return(
<View style={styles.port}>
    <Navbar/>
    <View style={styles.content}>
        {children}
    </View>
    
</View>
    )
}
const styles = StyleSheet.create({
    port: {
        flex: 1,
        backgroundColor: "#000"
    },
    content: {
        flex: 1
    }
})