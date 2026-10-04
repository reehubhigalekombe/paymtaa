
import React, {useState} from 'react'
import { View, Text, Alert, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export default function App() {
    const[isPressed, setIsPressed] = useState(false);
    const[phone, setPhone] = useState('');
    const [amount, setAmount] = useState("");
    const sendPaymentRequest = async() => {
        if(!phone || !amount) {
            Alert.alert(
                "Missing details", "Kindly enter phone number and amount"
            )
            return;
        }
        try {
            const response = await  fetch(
                "http://10.0.2.2:3000/mpesa/stkpush", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        phone: phone,
                        amount: amount
                    })
                }
            );

            const data = await response.json();
            console.log("STK Response: ", data);
            if(response.ok) {
                Alert.alert(
                    "STK push Response",
                    "MPESA payment resquest Sucesss"
                );
            } else {
                Alert.alert(
                    "Request failed", 
                    data.message || "Something must have gone wrong"
                )
            }

        }catch(error) {
            console.error("Payment request error: ", error);
            Alert.alert("Connection error", "Could not connect to Tulipe servers")

        }
    }
  return ( 
<View style={styles.port}>

    <Text style={styles.title}>TuLipe</Text>
    <Text style={styles.subTitle}>Request Payment</Text>
   <View style={styles.subPort}>

    <View style={styles.formPort}>
        <Text style={styles.names}>ENTER NUMBER</Text>
        <TextInput placeholder='0742106109' 
        placeholderTextColor="#6c6a6a"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType='phone-pad'/>
    </View>
    <View style={styles.formPort}>
        <Text style={styles.names}>ENTER AMOUNT</Text>
        <TextInput placeholder='100'
        value={amount}
        onChangeText={setAmount}
        keyboardType='numeric'
        placeholderTextColor="#6c6a6a"
        style={styles.input}/>
    </View>
   </View>
   
    <View style={styles.formPort}>
     <TouchableOpacity style={[
        styles.button, 
        isPressed && styles.buttonPressed
     ]} 
     onPressIn={() => setIsPressed(true)}
     onPressOut={() => setIsPressed(false)}
     onPress={sendPaymentRequest}
     >
      <Text style={styles.buttonText}>Send Request</Text>
     </TouchableOpacity>
    </View>
</View>
  )
}
const styles = StyleSheet.create({
port: {
    flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:  '#111',
},
subPort: {
    width: "90%", padding: 20, alignItems: "center", borderWidth: 2, borderColor: "#fff",
    borderRadius: 12

},
title: {
    fontSize: 50, color: '#0A9DF1', fontWeight: "bold"
},
subTitle: {
    fontSize: 30, color: '#fff', marginBottom: 20
},
formPort: {
    width: "85%",
    justifyContent: "center",  alignItems: "center", display: "flex",  flexDirection: "column",
    gap: 20,

},
names: {
color: "#fff", fontSize: 28, 
marginBottom: 2, fontWeight: "500"
},

input: {
    borderWidth: 2,
    borderColor: '#0A9DF1' ,
    width: "100%", height: 60,
    textAlign: "center",
    fontWeight: "400",
    fontSize: 28,
    marginBottom: 20,
    color: "#fff",
    borderRadius: 12
}, 

button: {
    width:  "60%",
    height: 50, backgroundColor:  "#0A9DF1", borderRadius: 8, 
    justifyContent: "center", alignItems: "center",
    marginTop: 30
}, 
buttonText: {
    color: "#fff", fontSize: 25, fontWeight: "600"
},
buttonPressed: {
backgroundColor: "white",

}
})
