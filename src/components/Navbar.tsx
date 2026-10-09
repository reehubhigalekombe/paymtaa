import React, { useState } from "react";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image,} from "react-native";
import * as Keychain from "react-native-keychain";

 type NavbarProps = {
        avatar?: string
    }
export default function Navbar({avatar}: NavbarProps) {
    const navigation = useNavigation();
       const[menuVisible, setMenuVisible] = useState(false)
    const handleLogout =  async () => {
       try {await Keychain.resetGenericPassword();
         setMenuVisible(false);
        navigation.reset({
            index: 0,
            routes: [{name: "Welcome" as never}]
        })

       }catch(error) {
        console.error("Logou error: ", error)
       }
    }

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
        <TouchableOpacity
        onPress={() => setMenuVisible(true)}
        >
             <Ionicons name="menu-outline" size={30} color="#fff"/>
        </TouchableOpacity>
    </View>

    <Modal
    visible={menuVisible}
    animationType="fade"
    transparent
    onRequestClose={() => setMenuVisible(false)}
    >
      <TouchableOpacity activeOpacity={1}
      onPress={() => setMenuVisible(false)}
      style={styles.floatModal}>

        <View style={styles.menu}>

<TouchableOpacity
onPress={() => {
    setMenuVisible(false); navigation.navigate("MainScr" as never)
}}
>
    <View style={styles.sets}>
<Ionicons   name="home-outline" size={26} color="#fff"/>
    <Text style={styles.subTitles}>Dashboard</Text>
    </View>
</TouchableOpacity>


<TouchableOpacity
onPress={() => {
    setMenuVisible(false); navigation.navigate("Transaction" as never)
}}
>
    <View style={styles.sets}>
<Ionicons   name="receipt-outline" size={26} color="#fff"/>
    <Text style={styles.subTitles}>Transactions</Text>
    </View>
</TouchableOpacity>



<TouchableOpacity
onPress={() => {
    setMenuVisible(false); navigation.navigate("MainScr" as never)
}}
>
    <View style={styles.sets}>
<Ionicons   name="card-outline" size={26} color="#fff"/>
    <Text style={styles.subTitles}>Request Payment</Text>
    </View>
</TouchableOpacity>



<TouchableOpacity
onPress={() => {
    setMenuVisible(false); navigation.navigate("MainScr" as never)
}}
>
    <View style={styles.sets}>
<Ionicons   name="person-circle-outline" size={26} color="#fff"/>
    <Text style={styles.subTitles}>View Profile</Text>
    </View>
</TouchableOpacity>



<TouchableOpacity
onPress={() => {
    setMenuVisible(false); navigation.navigate("MainScr" as never)
}}
>
    <View style={styles.sets}>
<Ionicons   name="settings-outline" size={26} color="#fff"/>
    <Text style={styles.subTitles}>Settings</Text>
    </View>
</TouchableOpacity>



<TouchableOpacity
onPress={() => {
    setMenuVisible(false); navigation.navigate("MainScr" as never)
}}
>
    <View style={styles.sets}>
<Ionicons   name="help-circle-outline" size={26} color="#fff"/>
    <Text style={styles.subTitles}>Help & Support</Text>
    </View>
</TouchableOpacity>

<View style={styles.divider} />

<TouchableOpacity
onPress={handleLogout}
>
    <View style={styles.sets}>
<Ionicons   name="power-outline" size={26} color="#fff"/>
    <Text style={styles.subTitles}>LogOut</Text>
    </View>
</TouchableOpacity>

        </View>
      </TouchableOpacity>

    </Modal>
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
floatModal: {
    flex: 1, alignItems: "flex-end", paddingTop: 70, paddingRight: 15,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
}, 
menu: {
    width: 250,
    paddingVertical: 8, paddingHorizontal: 12,
    elevation: 10,borderRadius: 10,
    shadowOpacity: 0.35, shadowRadius: 8,
    backgroundColor: "#121212", shadowColor: "#000",
    shadowOffset: {
        width: 0, height: 5
    }
}, sets: {
    flexDirection: "row", alignItems: "center", gap: 14, paddingVertical: 12
},
subTitles: {
    color: "#fff",
    fontSize: 18
},
divider: {
    height: 1, marginVertical: 5, backgroundColor: "#333"
}
})