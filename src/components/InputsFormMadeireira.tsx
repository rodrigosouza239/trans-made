
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../database/api';
import { Feather as Icon } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';



export default function InputsFormMadeireira() {
  const navigation = useNavigation();
  const { navigate } = useNavigation();
  const [razao, setRazao] = useState('')
  const [endereco, setEndereco] = useState('')
  const [uf, setUF] = useState('')
  const [cidade, setCidade] = useState('')
  const [proprietario, setProprietario] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [password, setPassword] = useState('')


  async function hadleNavigateToHomePage(){
    const data ={
      razao,
      endereco,
      uf,
      cidade,
      proprietario,
      telefone,
      cnpj,
      password,
    };
    try{
        const response = await api.post('/serraria',data);
        navigation.navigate('PageMadeireira')
    } catch(err){
        alert('Erro no cadastro, tente novamente.')
    }
    }
  return (
    <ScrollView  style={styles.container}>
      <View style={{justifyContent:'center',alignItems:'center'}} >
      <Text style={{fontSize:17,maxWidth:220,textAlign:'center',marginBottom:20,color:'#000',fontWeight:'bold',justifyContent:'flex-start'}} >DADOS DA MADEIREIRA (SERRARIA)</Text>
       <TextInput 
                style={styles.Formcontainer}
                placeholder="RAZÃO SOCIA"
                placeholderTextColor="#7C7979"
                 value={razao}
                 onChangeText={setRazao}
           />
           <TextInput   style={styles.Formcontainer}
                placeholder="ENDEREÇO"
                placeholderTextColor="#7C7979"
                 textContentType="emailAddress"
                 value={endereco}
                 onChangeText={setEndereco}
           />
             <Picker 
         selectedValue={uf}
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
         onValueChange={(itemValue:any) => setUF(itemValue)}
        >
          <Picker.Item color="#7C7979" label="UF" value="mc" />
          <Picker.Item color="#7C7979" label="RO" value="RO" />
          <Picker.Item color="#7C7979" label="AC" value="AC" />
          <Picker.Item color="#7C7979" label="AM" value="AM" />
          <Picker.Item color="#7C7979" label="RR" value="RR" />
          <Picker.Item color="#7C7979" label="PA" value="PA" />
          <Picker.Item color="#7C7979" label="AP" value="AP" />
          <Picker.Item color="#7C7979" label="TO" value="TO" />
          <Picker.Item color="#7C7979" label="MA" value="MA" />
          <Picker.Item color="#7C7979" label="PI" value="PI" />
          <Picker.Item  color="#7C7979"label="CE" value="CE" />
          <Picker.Item color="#7C7979" label="RN" value="RN" />
          <Picker.Item color="#7C7979" label="PB" value="PB" />
          <Picker.Item color="#7C7979" label="PE" value="PE" />
          <Picker.Item color="#7C7979" label="AL" value="AL" />
          <Picker.Item color="#7C7979" label="SE" value="SE" />
          <Picker.Item color="#7C7979" label="BA" value="BA" />
          <Picker.Item color="#7C7979" label="MG" value="MG" />
          <Picker.Item color="#7C7979" label="ES" value="ES" />
          <Picker.Item color="#7C7979" label="RJ" value="RJ" />
          <Picker.Item color="#7C7979" label="SP" value="SP" />
          <Picker.Item color="#7C7979" label="PR" value="PR" />
          <Picker.Item color="#7C7979" label="SC" value="SC" />
          <Picker.Item color="#7C7979" label="RS" value="RS" />
          <Picker.Item color="#7C7979" label="MS" value="MS" />
          <Picker.Item color="#7C7979" label="MT" value="MT" />
          <Picker.Item color="#7C7979" label="GO" value="GO" />
          <Picker.Item color="#7C7979" label="DF" value="DF" />
        </Picker>
        <TextInput 
                style={styles.Formcontainer}
                placeholder="CIDADE"
                placeholderTextColor="#7C7979"
                 value={cidade}
                 onChangeText={setCidade}
           />
            <TextInput 
                style={styles.Formcontainer}
                placeholder="PROPRIETÁRIO (PESSOA QUE O MOTORISTA VAI PROCURAR)"
                placeholderTextColor="#7C7979"
                 value={proprietario}
                 onChangeText={setProprietario}
           />
            <TextInput 
                style={styles.Formcontainer}
                placeholder="TELEFONE PARA CONTATO"
                placeholderTextColor="#7C7979"
                 value={telefone}
                 onChangeText={setTelefone}
           />

<TextInput 
                style={styles.Formcontainer}
                placeholder="CNPJ"
                placeholderTextColor="#7C7979"
                 value={cnpj}
                 onChangeText={setCnpj}
           />

<TextInput 
                style={styles.Formcontainer}
                placeholder="CADASTRAR UMA SENHA"
                placeholderTextColor="#7C7979"
                 value={password}
                onChangeText={setPassword}
           />


<TouchableOpacity onPress={hadleNavigateToHomePage} style={styles.Buttoncontainer} >
        <Text style={styles.TextButtoncontainer} >CADASTRAR</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
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
    alignItems:'center'
    
  },
  TextButtoncontainer:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold'
  },

});
