
import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Api from '../../database/database';


import { useNavigation } from '@react-navigation/native';


export default function AdminRegister() {
     const { navigate } = useNavigation();
     const navigation = useNavigation();
     const[loading, setLoading] = useState(false);
     const [ email, setEmail ] = useState('');
     const [ password, setPassword ] = useState('');
   
      const hadleNavigateToSeja = async () => {
        setLoading(true)
        if(email != '' && password != ''){
            
            let json = await Api.AdminSign(email,password);
            if(json) {
                navigate('AdminPage')
            } else{
                alert('Somente o admistrador')
            }
        } else {
            alert( 'Preencha os campos!');
        }
        setLoading(false);
    }
  return (
     <>
    <LinearGradient colors={[
      '#fff', '#fff'
    ]} style={styles.container}>
          <View>
            <View style={styles.Logocontainer} >
              <Text style={styles.TextLogocontainer}>Acesse</Text>
              <Text  style={styles.TextFormcontainer}>SOMENTE O ADMISTRADOR</Text>
            </View>
            <TextInput   style={styles.Formcontainer}
                placeholder="Email"
                placeholderTextColor="#7C7979"
                 textContentType="emailAddress"
                 value={email}
                 onChangeText={setEmail}
           />


        <TextInput 
                style={styles.Formcontainer}
                placeholder="Senha"
                placeholderTextColor="#7C7979"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
           />

<TouchableOpacity onPress={hadleNavigateToSeja} style={styles.Buttoncontainer}>
                   {loading ? (
                         <ActivityIndicator  size="small" color="#fff" />
                   ) : (
                    <Text style={styles.TextButtoncontainer} >Entrar</Text>
                   )}   
               </TouchableOpacity>
          
          </View>
    </LinearGradient>
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
    textAlign:'center',
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
  },

  TextFormcontainer:{
    fontSize:18,
    textAlign:'center',
    marginBottom:20
  }
});
