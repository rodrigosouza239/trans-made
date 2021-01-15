
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import api from '../database/api';
import {Picker} from '@react-native-picker/picker';


export default function InputsFormRegisterFrete() {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  const [madeira, setMadeira] = useState('')
  const [caminhao, setCaminhao] = useState('')
  const [peso, setPeso] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [valorfrete, setValorfrete] = useState('')
  const [livre, setLivre] = useState('')
  const [pagarcarrego, setPagarcarrego] = useState('')
  const [pagaricms, setPagaricms ] = useState('')
  const [adiantamento, setAdiantamento] = useState('')
  const [valoradian, setValoradian] = useState('')


  async function hadleNavigateToHomePage(){
    const data ={
      madeira,
      caminhao,
      peso,
      quantidade,
      valorfrete,
      livre,
      pagarcarrego,
      pagaricms,
      adiantamento,
      valoradian,
    };
    try{
        const response = await api.post('serrariadescricao',data);
        navigation.navigate('PageMadeireira')
    } catch(err){
        alert('Erro no cadastro, tente novamente.')
    }
    }

  function hadleNavigateToPageMadeireira(){
   navigate('PageMadeireira')
   }
  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,maxWidth:220,textAlign:'center',marginBottom:20,paddingTop:20}} >SOBRE FRETE</Text>
       <TextInput 
                style={styles.Formcontainer}
                placeholder="TIPO DE MADEIRA"
                placeholderTextColor="#7C7979"
                 value={madeira}
                 onChangeText={setMadeira}
           />
           <TextInput   style={styles.Formcontainer}
                placeholder="TIPO DE CAMINHÃO"
                placeholderTextColor="#7C7979"
                 textContentType="emailAddress"
                 value={caminhao}
                 onChangeText={setCaminhao}
           />
        <TextInput 
                style={styles.Formcontainer}
                placeholder="PESO TOTAL DA CARGA"
                placeholderTextColor="#7C7979"
                 value={peso}
                 onChangeText={setPeso}
           />
            <TextInput 
                style={styles.Formcontainer}
                placeholder="QUANTIDADE DE M3"
                placeholderTextColor="#7C7979"
                 value={quantidade}
                 onChangeText={setQuantidade}
           />
            <TextInput 
                style={styles.Formcontainer}
                placeholder="VALOR FRETE POR M3"
                placeholderTextColor="#7C7979"
                 value={valorfrete}
                 onChangeText={setValorfrete}
           />

           <Text style={{fontSize:20,maxWidth:220,textAlign:'center',marginBottom:20}}>SOBRE DESPESAS DO FRETE</Text>

              <Picker 
          selectedValue={livre}
         style={{  backgroundColor:'#F0F0F5',
         width:320,
         height:50,
         marginBottom:20,
         paddingHorizontal:20,
         justifyContent:'space-between',
         alignItems:'center',
     
         fontSize:16,
         fontWeight:'bold',
         color:'#7C7979' }}
         onValueChange={(itemValue:any) => setLivre(itemValue)}
        >
          <Picker.Item label="LIVRE DAS DESPESAS" value="mc" />
          <Picker.Item label="SIM" value="SIM" />
          <Picker.Item label="NÃO" value="NÃO" />
        </Picker>


<Picker 
          selectedValue={pagarcarrego}
         style={{  backgroundColor:'#F0F0F5',
         width:320,
         height:50,
         marginBottom:20,
         paddingHorizontal:20,
         justifyContent:'space-between',
         alignItems:'center',
     
         fontSize:16,
         fontWeight:'bold',
         color:'#7C7979' }}
         onValueChange={(itemValue:any) => setPagarcarrego(itemValue)}
        >
          <Picker.Item label="PAGAR CARREGO" value="mc" />
          <Picker.Item label="SIM" value="SIM" />
          <Picker.Item label="NÃO" value="NÃO" />
        </Picker>


<Picker 
          selectedValue={pagaricms}
         style={{  backgroundColor:'#F0F0F5',
         width:320,
         height:50,
         marginBottom:20,
         paddingHorizontal:20,
         justifyContent:'space-between',
         alignItems:'center',
     
         fontSize:16,
         fontWeight:'bold',
         color:'#7C7979' }}
         onValueChange={(itemValue:any) => setPagaricms(itemValue)}
        >
          <Picker.Item label="PAGAR ICMS DE FRETE" value="mc" />
          <Picker.Item label="SIM" value="SIM" />
          <Picker.Item label="NÃO" value="NÃO" />
        </Picker>


<Picker 
          selectedValue={adiantamento}
         style={{  backgroundColor:'#F0F0F5',
         width:320,
         height:50,
         marginBottom:20,
         paddingHorizontal:20,
         justifyContent:'space-between',
         alignItems:'center',
     
         fontSize:16,
         fontWeight:'bold',
         color:'#7C7979' }}
         onValueChange={(itemValue:any) => setAdiantamento(itemValue)}
        >
          <Picker.Item label="ADIATAMENTO" value="mc" />
          <Picker.Item label="SIM" value="SIM" />
          <Picker.Item label="NÃO" value="NÃO" />
        </Picker>

<TextInput 
                style={styles.Formcontainer}
                placeholder="VALOR DO ADIANTAMENTO"
                placeholderTextColor="#7C7979"
                 value={valoradian}
                 onChangeText={setValoradian}
           />
        </View>
      </ScrollView>
<TouchableOpacity onPress={hadleNavigateToHomePage} style={styles.Buttoncontainer} >
        <Text style={styles.TextButtoncontainer} >CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
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

  Buttoncontainer:{
    backgroundColor:'#000',
    width:320,
    height:50,
    borderRadius:25,
   
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
    
  },
  TextButtoncontainer:{
    fontSize:20,
    color:'#fff'
  },

});
