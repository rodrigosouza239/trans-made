
import React from 'react';
import { StyleSheet, Text, View,TextInput, TextInputProps } from 'react-native';

import { maskCnpj, maskCpf, maskphone } from '../utils/masks'


interface InputProps extends TextInputProps {
   mask: "CPF" | "CNPJ" | "PHONE",
   inputMaskChange: any;
}

const Input: React.FC<InputProps> = ({mask,inputMaskChange,... rest}) =>{

  function handleChage(text: string){
    if( mask == 'CPF' ){
      const value = maskCpf(text);
      inputMaskChange(value)
    }
       if(mask == 'CNPJ'){
         const value = maskCnpj(text);
         inputMaskChange(value)
       }
       if(mask == 'PHONE'){
        const value = maskphone(text);
        inputMaskChange(value)
      }
  }


  return(

    <>
       <TextInput 
       style={styles.Formcontainer}
        {...rest}
          onChangeText={text => handleChage(text)}
        />
    </>
  )


}

export default Input;

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
