
import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import InputsForm from '../../components/InputsForm';
import { LinearGradient } from 'expo-linear-gradient';

import Api from '../../database/database';

import { useNavigation } from '@react-navigation/native';


export default function Login() {
     const { navigate } = useNavigation();
     const navigation = useNavigation();
     const[loading, setLoading] = useState(false);
     const [ cpf, setCpf ] = useState('');
    const [ password, setPassword ] = useState('');

     function hadleNavigateToLoginMADEIREIRAPage(){
      navigate('LoginMADEIREIRA')
      }


      const hadleNavigateToSeja = async () => {
        setLoading(true)
        if(cpf != '' && password != ''){
            
            let json = await Api.signInTransportador(cpf,password);
            if(json.token) {
                navigate('Home')
            } else{
                alert('E-mail ou senha errads')
            }
        } else {
            alert( 'Preencha os campos!');
        }
        setLoading(false);
    }



      function hadleNavigateToHomePage(){
        navigate('Home')
        }

        function hadleNavigateToAdminLogin(){
          navigate('AdminLogin')
          }
  return (
    <>
    <LinearGradient colors={[
      '#fff', '#fff'
    ]} style={styles.container}>
          <View>
            <View style={styles.Logocontainer} >
              <Text style={styles.TextLogocontainer}>Acesse</Text>
            </View>
            <TextInput 
                style={styles.Formcontainer}
                placeholder="CPF"
                 placeholderTextColor="#7C7979"
                 value={cpf}
                 onChangeText={setCpf}
           />

<TextInput 
                style={styles.Formcontainer}
                placeholder="SENHA"
                placeholderTextColor="#7C7979"
                value={password}
                 onChangeText={setPassword}
           />

            <View style={{
 justifyContent:'flex-start',
    flexDirection:'row',
    paddingTop:10,
    left:10,
    marginBottom:20,
   }}>
      <Text style={{color:'#6A6A6A',fontSize:17}} >ou</Text>
      <TouchableOpacity onPress={hadleNavigateToLoginMADEIREIRAPage}>
        <Text style={{color:'#1854DB',fontSize:17,fontWeight:'bold',marginLeft:10}} >Faça login madeireira</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity onPress={hadleNavigateToSeja} style={styles.Buttoncontainer}>
                   {loading ? (
                         <ActivityIndicator  size="small" color="#fff" />
                   ) : (
                    <Text style={styles.TextButtoncontainer} >Entrar</Text>
                   )}   
               </TouchableOpacity>

          </View>
    </LinearGradient>
    <View style={{justifyContent:'space-around', flexDirection:'row', alignItems: 'center', height:40}}>
    <Text style={{color:'#6A6A6A',fontSize:13}} >ARÉA RESTRITA SOMENTE ADMISTRADOR</Text>
      <TouchableOpacity onPress={hadleNavigateToAdminLogin}>
        <Text style={{color:'#1854DB',fontSize:17,fontWeight:'bold',marginRight:10}} >Faça login</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Buttoncontainer:{
    backgroundColor:'#000',
    width:320,
    height:50,
    borderRadius:25,
   
    justifyContent:'center',
    alignItems:'center'
    
  },
  TextButtoncontainer:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold',
  },
  Logocontainer:{
    justifyContent:'flex-start',
    marginBottom:30,
  },
  TextLogocontainer:{
    
    fontSize:40,
    color:'#000',
    fontWeight:'bold'
  },
  Formcontainer:{
 
    backgroundColor:'#F0F0F5',
    width:320,
    height:50,
    marginBottom:20,
    paddingHorizontal:20,
    justifyContent:'space-between',
    alignItems:'center',

    fontSize:16,
    fontWeight:'700'
  }
});
