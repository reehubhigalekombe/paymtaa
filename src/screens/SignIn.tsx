import React, {useState} from  "react";
import { useNavigation } from "@react-navigation/native";
import  Ionicons from "@react-native-vector-icons/ionicons"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from "react-native";
import axios from "axios";
export default function SignIn() {
    const [fullName, setFullNme] = useState("");
    const[businessName, setBusinessName] = useState("");
    const[phoneNumber, setPhoneNumber]= useState("");
    const[password, setPassword] = useState("");
    const[shortcode, setShortcode] = useState("");

    const createAccount = async () => {
        if(!fullName || !businessName || !phoneNumber || !password || !shortcode) {
Alert.alert("Missing field", "Please fill all fields")
return
        }

        try {
            const response = await axios.post("http://10.0.2.2:3000/auth/register",
                {
fullName, businessName, phoneNumber, password, shortcode
                }
            );
            console.log("Registartion response: ", response.data)
Alert.alert("Accont Created", "Your account with Tulipe has been created succesfuly. ",
    [
        {
            text: "Continue",
            onPress: () => navigation.navigate("LogIn" )
        }
    ]
)
        }catch(error: any) {
            console.error(" Registration error: ", error.response?.data || error.message);
            Alert.alert(
                "Registartion Failed", error.response?.data?.message || "Unable to connect to TuLipe Servers"
            )

        }
    }
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
           <View style={{marginBottom: 40}}>
             <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={26} color="#fff"/>
            </TouchableOpacity>
           </View>

            <View style={styles.field}>
                <Text style={styles.title}>CREATE ACCOUNT</Text>
            </View>
<View style={styles.fields}> 
    <View style={styles.inputField}>
                  <Text style={styles.lables}>FULL NAME:</Text>
       <TextInput style={styles.input} 
       value={fullName}
       onChangeText={setFullNme}
       placeholder="Higal Ekombe"
       placeholderTextColor="#747272"/>
            </View>

  <View style={styles.inputField}>
                  <Text style={styles.lables}>BUSINESS NAME:</Text>
       <TextInput style={styles.input} 
       value={businessName}
       onChangeText={setBusinessName}
       placeholder="MK MEDIA"
       placeholderTextColor="#747272"/>
            </View>

             <View style={styles.inputField}>
                  <Text style={styles.lables}>PHONE NUMBER:</Text>
       <TextInput style={styles.input} 
       value={phoneNumber}
       onChangeText={setPhoneNumber}
       placeholder="0742106109"
       keyboardType="numeric"
       placeholderTextColor="#747272"/>
            </View>

            <View style={styles.inputField}>
                  <Text style={styles.lables}>PASSWORD</Text>
       <TextInput style={styles.input} 
       value={password}
       onChangeText={setPassword}
       secureTextEntry
       placeholder="xxxxxx"
       placeholderTextColor="#747272"/>
            </View>

            <View style={styles.inputField}>
                  <Text style={styles.lables}>MPESA TILL:</Text>
       <TextInput style={styles.input} 
       value={shortcode}
       keyboardType="numeric"
       onChangeText={setShortcode}
       placeholder="56xxx7"
       placeholderTextColor="#747272"/>
            </View>
</View>
<View>
    <TouchableOpacity style={styles.butt}
    onPress={createAccount}
    >
        <Text style={styles.butText}>CREATE</Text>
    </TouchableOpacity>
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
    color: "#000", fontSize: 25, fontWeight: "600", letterSpacing: 1
 },
})