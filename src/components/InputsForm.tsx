
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';


interface HeaderProps{
 title: string;
}
1
export default function InputsForm() {
  return (
    <View style={styles.container}>
      
        <TextInput 
                style={styles.Formcontainer}
                placeholder="CPF ou CNPJ"
                 placeholderTextColor="#7C7979"
           />

<TextInput 
                style={styles.Formcontainer}
                placeholder="SENHA"
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
  }

});
