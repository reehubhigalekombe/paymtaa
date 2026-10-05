import React from "react";
import Ionicons from "@react-native-vector-icons/ionicons";
import { View, Text, TouchableOpacity, StyleSheet, Image,} from "react-native";

 type NavbarProps = {
        avatar?: string
    }
export default function Navbar({avatar}: NavbarProps) {

   
    return(
<View style={styles.head}>
    <View style={{gap: 10, flexDirection: "row", alignItems: "center"}}>
        
{
    avatar ?  (
        <Image source={{uri: avatar}}  style={styles.img}  />
    ) :
    (
        <Ionicons   name="person-circle-outline" size={50} color="#fff"/>
    )
}
  <Text style={{color: "#fff", fontSize: 27}}>Profile</Text>
    </View>

    <View>
        <TouchableOpacity>
             <Ionicons name="menu-outline" size={30} color="#fff"/>
        </TouchableOpacity>
    </View>
</View>
    )
}
const styles = StyleSheet.create({
    head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    width: "100%", paddingHorizontal: 20,
    backgroundColor: "#0A9DF1",
    borderRadius: 5,
    marginBottom: 30
},
img: {
    height: 60, width: 60,  borderRadius: 30
},
})