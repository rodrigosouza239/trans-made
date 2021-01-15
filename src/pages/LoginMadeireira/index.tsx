
import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,ActivityIndicator,KeyboardAvoidingView,Platform } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import InputsForm from '../../components/InputsForm';

import { useNavigation } from '@react-navigation/native';
import Api from '../../database/database';


import { LinearGradient } from 'expo-linear-gradient';

export default function LoginMadeireira() {
     const { navigate } = useNavigation();
     const navigation = useNavigation();

     const[loading, setLoading] = useState(false);
     const [ cnpj, setCnpj ] = useState('');
    const [ password, setPassword ] = useState('');

     const hadleNavigateToSeja = async () => {
      setLoading(true)
      if(cnpj != '' && password != ''){
          
          let json = await Api.signInSerraria(cnpj,password);
          if(json.token) {
              navigate('PageMadeireira')
          } else{
              alert('E-mail ou senha errads')
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
            </View>
            <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
            <TextInput 
                style={styles.Formcontainer}
                placeholder="CNPJ"
                 placeholderTextColor="#7C7979"
                 value={cnpj}
                 onChangeText={setCnpj}
           />

<TextInput 
                style={styles.Formcontainer}
                placeholder="SENHA"
                placeholderTextColor="#7C7979"
                value={password}
                 onChangeText={setPassword}
           />

            </KeyboardAvoidingView>
            <View style={{
 justifyContent:'flex-start',
    flexDirection:'row',
    paddingTop:10,
    left:10,
    marginBottom:20,
   }}>
    </View>

    <TouchableOpacity onPress={hadleNavigateToSeja} style={styles.Buttoncontainer} >
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
  }
});
