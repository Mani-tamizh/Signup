import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation()
  const handleRegister=()=>{
    navigation.navigate('Signup')
  }
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/Zero-Degree-Coder/LoginSingupScreenInReactNative/refs/heads/main/src/assets/topVector.png',
          }}
          style={styles.topImage}
        />
      </View>
      <View style = {styles.helloContainer}>
        <Text style = {styles.helloText}>Hello</Text>
      </View>
      <View>
        <Text style={styles.signinText}>Sign in to your account</Text>
      </View>
      <View style = {styles.inputContainer}>
        <FontAwesome name={"user"} size={24} color={"#9a9a9a"} style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Email"/>
      </View>
      <View style = {styles.inputContainer}>
        <Fontisto name={"locked"} size={24} color={"#9a9a9a"} style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry/>
      </View>
      <Text style={styles.forgotPassword}>Forgot your password ?</Text>
      <View style={styles.signinButtonContainer}>
        <Text style={styles.signin}>Sign in</Text>
        <TouchableOpacity onPress={handleRegister} style={styles.btn}>
          <AntDesign name={"arrowright"} size={30} color={"whitesmoke"} style={styles.inputIcon}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.footerText}>Don't have an account? <Text style={{textDecorationLine:"underline"}}>Create</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:0,
    padding:0,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',// Add spacing below the image
  },
  topImageContainer: {
    width: '100%',
  },
  topImage: {
    width: '100%', // Scale image width to 90% of the container
    height: 130, // Make// Preserve aspect ratio
  },
  helloContainer:{
    width:"100%"
  },
  helloText:{
    textAlign:"center",
    fontSize:70,
    fontWeight:"500",
    color:"#262626"
  },
  signinText:{
    textAlign:"center",
    fontSize:18,
    color:"#262626",
    marginBottom:30,
  },
  inputContainer:{
    alignItems:"center",
    backgroundColor:"#ffffff",
    flexDirection:"row",
    borderRadius:20,
    marginHorizontal:40,
    elevation:10,
    marginVertical:20,
    height:50,
  },
  textInput:{
    flex:1,
  },
  inputIcon:{
    marginLeft:15,
    marginRight:5,
  },
  forgotPassword:{
    color:"#bebebe",
    textAlign:"right",
    width:"90%",
    fontSize:15,
  },
  signinButtonContainer:{
    flexDirection:"row",
    marginTop:120,
    width:"94%",
    justifyContent:"flex-end"
  },
  signin:{
    color:"#262626",
    fontSize:25,
    fontWeight:"bold",
  },
  btn:{
    height:34,
    width:56,
    backgroundColor:"purple",
    borderRadius:17,
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:10,
  },
  footerText:{
    color:"#262626",
    textAlign:"center",
    fontSize:15,
    marginTop:120,
  }

});
