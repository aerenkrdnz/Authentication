import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  useEffect(()=>{
auth.onAuthStateChanged((user) => {
  if(user){
    navigation.navigate('Home');
  }
})
  },[])
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Kullanıcı kayıt oldu Email adresi =>", user.email);
      })
      .catch((err) => alert(err.message));
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Kullanıcı giriş yaptı", user.email);
      })
      .catch((err) => alert(err.message));
  }
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.outlineButton]}>
          <Text style={styles.outlineButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputContainer:{
    width:'80%',
    
  },
  input:{
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical: 10,
    marginTop: 7,
    borderRadius:15,
  },
  buttonContainer:{
    width: '60%',
    marginTop: 40,
  },
  button:{
    backgroundColor:'#0782F9',
    padding:15,
    alignItems:'center',
    borderRadius:120,
    marginTop:15,
  },
  buttonText:{
    color:'white',
    fontSize:18,
    fontWeight:700,
  },
  outlineButton:{
    backgroundColor:'white'
  },
  outlineButtonText:{
    color:'#0782F9',
    fontSize:18,
    fontWeight:700,
  },
});
