import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
const SignupScreen = () => {
  const navigation = useNavigation()
  const handleRegister=()=>{
    navigation.navigate('Login')
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
        <Text style = {styles.helloText}>Create account</Text>
      </View>
      <View style = {styles.inputContainer}>
        <FontAwesome name={"user"} size={24} color={"#9a9a9a"} style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Username"/>
      </View>
      <View style = {styles.inputContainer}>
        <Fontisto name={"locked"} size={24} color={"#9a9a9a"} style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry/>
      </View>
      <View style = {styles.inputContainer}>
        <Foundation
 name={"mail"} size={24} color={"#9a9a9a"} style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Email" secureTextEntry/>
      </View>
      <View style = {styles.inputContainer}>
        <Foundation name={"telephone"} size={24} color={"#9a9a9a"} style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Mobile"/>
      </View>
      <View style={styles.signinButtonContainer}>
        <Text style={styles.signin}>Create</Text>
        <TouchableOpacity onPress={handleRegister} style={styles.btn}>
          <AntDesign name={"arrowright"} size={30} color={"whitesmoke"} style={styles.inputIcon}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.footerText}>Or create account using social media</Text>
      </TouchableOpacity>
      <View style={styles.brands}>
        <TouchableOpacity style={styles.TouchBrands}>
          <FontAwesome name={"facebook"} size={24} color={"#9a9a9a"} style={styles.inputBrand}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchBrandss}>
          <FontAwesome name={"twitter"} size={24} color={"#9a9a9a"} style={styles.inputBrand}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchBrandssi}>
          <FontAwesome name={"instagram"} size={24} color={"#9a9a9a"} style={styles.inputBrand}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:0,
    padding:0, // Align content to the top
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
    width: "100%", // Scale image width to 90% of the container
    height: 130, // Make// Preserve aspect ratio
  },
  helloContainer:{
    width:"100%",
    marginTop:30,
    marginBottom:20,
  },
  helloText:{
    textAlign:"center",
    fontSize:30,
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
    marginTop:30,
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
    marginTop:40,
  },
  brands:{
    flexDirection:"row",
    width:"100%",
    marginTop:40,
    gap:10,
    justifyContent:"center",
  },
  TouchBrands:{
    backgroundColor:"blue",
    height:35,
    width:35,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:30,
  },
  inputBrand:{
    textAlign:"center",
  },
   TouchBrandss:{
    backgroundColor:"#1DA1F2",
    height:35,
    width:35,
    color:"black",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:30,
  },
  TouchBrandssi:{
    backgroundColor:"#285AEB",
    height:35,
    width:35,
    color:"black",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:30,
  }
});
