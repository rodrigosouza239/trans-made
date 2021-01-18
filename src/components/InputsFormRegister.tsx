
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView,SectionList } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../database/api';
import Input from '../components/InputsForm';

import {Picker} from '@react-native-picker/picker';


export default function InputsFormRegister() {
  const navigation = useNavigation();
  const { navigate } = useNavigation();
  const [name, setName] = useState('')
  const [tipo, setTipo] = useState('')
  const [estado, setEstado] = useState('')
  const [pesocarga, setPesocarga] = useState('')
  const [carregou, setCarregou] = useState('')
  const [quaisempresas, setQuaisempresas] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('');



  async function hadleNavigateToHomePage(){
    const data ={
      name,
      tipo,
      estado,
      pesocarga,
      carregou,
      quaisempresas,
      telefone,
      cpf,
      password,
    };
    try{
        const response = await api.post('/transportador',data);
        navigation.navigate('Home')
    } catch(err){
        alert('Erro no cadastro, tente novamente.')
    }
    }
  return (
    <ScrollView style={styles.container}>
      <View style={{justifyContent:'center',alignItems:'center'}} >
      <Text style={{fontSize:17,maxWidth:270,textAlign:'center',marginBottom:20,color:'#000',fontWeight:'bold',justifyContent:'flex-start'}} >DADOS DO MOTORISTA(TRANSPORTADOR)</Text>
       <TextInput 
                style={styles.Formcontainer}
                placeholder="SEU NOME"
                placeholderTextColor="#7C7979"
                 value={name}
                 onChangeText={setName}
           />
               <Picker 
        selectedValue={tipo}
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
         onValueChange={(itemValue:any) => setTipo(itemValue)}
        >
          <Picker.Item  label="TIPO DE CAMINHÃO" value="mc" />
          <Picker.Item label="Truck" value="Truck" />
          <Picker.Item label="BiTruck" value="BiTruck" />
          <Picker.Item label="Carreta simples" value="Carreta Simples"/>
          <Picker.Item label="Carreta ls" value="Carreta Ls" />
          <Picker.Item label="Carreta BiTrem" value="Carreta BiTrem" />
          <Picker.Item label="Carreta Vanderleia" value="Carreta Vanderleia"/>
          <Picker.Item label="Carreta Rodotrem" value="Carreta Rodotrem" />
        </Picker>
        <TextInput 
                style={styles.Formcontainer}
                placeholder="QUAIS ESTADO TEM PERERENCIA PARA CARREGAR?"
                placeholderTextColor="#7C7979"
                 value={estado}
                 onChangeText={setEstado}
           />
            <TextInput 
                style={styles.Formcontainer}
                placeholder="PESO TOTAL DA CARDA"
                placeholderTextColor="#7C7979"
                 value={pesocarga}
                 onChangeText={setPesocarga}
           />
            <Picker 
         selectedValue={carregou}
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
         onValueChange={(itemValue:any) => setCarregou(itemValue)}
        >
          <Picker.Item label="JÁ CARREGOU MADEIRA?" value="mc" />
          <Picker.Item label="SIM" value="SIM" />
          <Picker.Item label="NÃO" value="NÃO" />
        </Picker>
<TextInput 
                style={{
                  backgroundColor:'#F0F0F5',
                  width:320,
                  height:80,
                  marginBottom:20,
                  paddingHorizontal:20,
                  justifyContent:'space-between',
                  alignItems:'center',
              
                  fontSize:16,
                  fontWeight:'700'
                }}
                placeholder="QUAIS EMPRESA JÁ CARREGOU (REFERENCIAS)?"
                placeholderTextColor="#7C7979"
                 value={quaisempresas}
                 onChangeText={setQuaisempresas}
           />

<Input
             value={telefone}
             mask="PHONE"
             maxLength={14}
             onChangeText={setTelefone}
             placeholder="TELEFONE PARA CONTATO"
             placeholderTextColor="#7C7979"
             inputMaskChange={(text: string)=> setTelefone(text)}
              />

<Input
             value={cpf}
             mask="CPF"
             maxLength={14}
             onChangeText={setCpf}
             placeholder="CPF"
             placeholderTextColor="#7C7979"
             inputMaskChange={(text: string)=> setCpf(text)}
              />

<TextInput 
                style={styles.Formcontainer}
                placeholder="PASSWORD"
                placeholderTextColor="#7C7979"
                 value={password}
                 secureTextEntry={true}
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
    alignItems:'center',
    marginBottom:20
    
  },
  TextButtoncontainer:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold'
  },

});
