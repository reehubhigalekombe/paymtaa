import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import  Ionicons from "@react-native-vector-icons/ionicons";
import axios from "axios";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from "react-native";
export default function SignIn() {
    const navigation = useNavigation();
     const[password, setPassword] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");

      const credentails = async () =>{
        try {
            const response = await axios.post("http://10.0.2.2:3000/auth/login",
                {
                    phoneNumber, password

                }
            );
            console.log("Login Response", response.data)
            Alert.alert("Accont Created", "Your account with Tulipe has been created succesfuly. ",
    [
        {
            text: "Continue",
            onPress: () => navigation.navigate("MainScr")
        }
    ]
)

        }catch(error: any) {
           console.error(" Login error: ", error.response?.data || error.message);
            Alert.alert(
                "Registartion Failed", error.response?.data?.message || "Unable to connect to TuLipe Servers"
            )
        }
      }
    return(
        <View style={styles.container}>
           <View style={{marginBottom: 40}}>
             <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={26} color="#fff"/>
            </TouchableOpacity>
           </View>

            <View style={styles.field}>
                <Text style={styles.title}>LOGIN</Text>
            </View>
<View style={styles.fields}> 
    <View style={styles.inputField}>
                  <Text style={styles.lables}>PHONE NUMBER:</Text>
       <TextInput style={styles.input} 
       placeholder="Higal Ekombe"
       keyboardType="numeric"
       value={phoneNumber}
       onChangeText={setPhoneNumber}
       placeholderTextColor="#747272"/>
       
            </View>

  <View style={styles.inputField}>
                  <Text style={styles.lables}>PASSWORD:</Text>
       <TextInput style={styles.input} 
       value={password}
       onChangeText={setPassword}
       secureTextEntry
       placeholder="xxxxxx"
       placeholderTextColor="#747272"/>
            </View>
</View>
<View>
    <TouchableOpacity style={styles.butt}
    onPress={credentails}
    >
        <Text style={styles.butText}>LOGIN</Text>
    </TouchableOpacity>
</View>
<View style={styles.signup}>
    <Text style={styles.logText}>Don't have Account?  </Text>
     <TouchableOpacity onPress={() => navigation.navigate("SignIn" as never)}>
            <Text style={{color: "#0A9DF1", fontSize: 30}}>Sign UP</Text></TouchableOpacity>
</View>

        
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, paddingTop: 50, paddingHorizontal: 25,
        gap: 20, backgroundColor: "#121212",
        width: "100%"
    },
    field: {
marginBottom: 30
    },
    title: {
fontSize: 30, color: "#fff", fontWeight: 500,  textAlign: "center"
    },
    fields: {
width: "100%", gap: 20
    },
    inputField: {
width: "100%"
    },
    lables: {
fontSize: 25, color: "#fff", fontWeight: "500", marginBottom: 5
    },
input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    fontSize: 25,
    paddingHorizontal: 5,
    color: "#fff"
}, 
 butt: {
    width: "55%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#fff",
    height: 55, elevation: 5, shadowColor: "#000", shadowOpacity: 0.25, shadowRadius: 4,
    shadowOffset: {
    width: 0, height: 3,
    },
    marginTop: 10
 },
 butText: {
    color: "000", fontSize: 25, fontWeight: "600", 
 },
 logText: {
    fontSize: 20, color: "#fff", fontWeight: 500,  textAlign: "center"

 },
 signup: {
    justifyContent: "center", alignItems: "center", flexDirection: "row"
 }
})