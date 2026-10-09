import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
export default function Transaction() {
    return(
<SafeAreaView style={styles.port}>
    <Navbar/>
    <View style={styles.port}>
    <Text style={{color: "#fff"}}>TULIPE TRANSACTIONS</Text>
   
</View>
</SafeAreaView>
    )
}
const styles = StyleSheet.create({
port: {
    flex:1 ,
    justifyContent: "center", alignItems: "center", backgroundColor: "#111"
},
head: {
    fontSize: 20, fontWeight: "400", color: "#fff", 
}
})