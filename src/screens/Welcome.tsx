import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, StyleSheet} from "react-native";
export default function SignIn() {
    const navigation = useNavigation()
    return(
        <View style={styles.mainPort}>
            <View style={styles.topRow}>
                <Image source={{uri: "https://drive.google.com/uc?export=download&id=1UuRLALfRKoX0nc7Ha-upUoRtoVqsVEbm"
  }}  style={styles.img} />
                   <Text style={styles.title}>TuLipe</Text>
                   <Text style={styles.subtitle}>Simple. Fast. Secure.</Text>
            </View>
            <View style={styles.bottomRow}>
                <TouchableOpacity 
                onPress={
                    () => navigation.navigate("LogIn" as never)
                }
                style={styles.button} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                 <TouchableOpacity 
                      onPress={
                    () => navigation.navigate("SignIn" as never)
                }
                 style={styles.button} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <Text  style={styles.group}>Stargate Group</Text>
        </View>

    )
}
const styles = StyleSheet.create({
mainPort: {
    flex: 1, backgroundColor: "#111", paddingHorizontal: 30,
    justifyContent: "center", alignItems: "center"

},
img: {
    height: 100, width: 100, borderWidth: 1, borderColor: "#fff", borderRadius: 50
},
topRow: {
    alignItems: "center", marginBottom: 40,

},
 bottomRow: {width: "90%",  alignItems: "center",
gap: 30
},
 button: {
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#fff",
    height: 55, elevation: 5, shadowColor: "#000", shadowOpacity: 0.25, shadowRadius: 4,
    shadowOffset: {
    width: 0, height: 3
    }
 },
 buttonText: {
    color: "#000", fontSize: 28, fontWeight: "500", 
    
 },
 title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "400",
    marginTop: 10
 },
 subtitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "400",
    marginTop: 10
 },
  group: {
    position: "absolute",
    bottom: 50,
    color: "#fff",
    fontSize: 25,
    fontWeight: "400",

 }
})