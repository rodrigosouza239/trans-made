
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';


interface HeaderProps{
 title: string;
}

export default function InputsFormAdmin() {
  return (
    <View style={styles.container}>
      <Text  style={styles.TextFormcontainer}>SOMENTE O ADMISTRADOR</Text>
           <TextInput   style={styles.Formcontainer}
                placeholder="Email"
                placeholderTextColor="#7C7979"
                 textContentType="emailAddress"
           />


        <TextInput 
                style={styles.Formcontainer}
                placeholder="Senha"
                placeholderTextColor="#7C7979"
           />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    
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
