
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';


import { useNavigation } from '@react-navigation/native'

import Backgroud from '../../assets/backgroud.png';

export default function Register() {

  const { navigate } = useNavigation();
    const navigation = useNavigation();

  function haldButonPageInputRegisterMotorista(){
    navigate('InputRegisterMotorista')
  }

  function haldButonPageInputsFormMadeireira(){
    navigate('InputsFormMadeireira')
  }

  return (
    <ImageBackground resizeMode="cover" source={Backgroud}   style={styles.container}>
    <View>
      <View style={styles.Logocontainer} >
        <Icon name="truck" size={50} color="#FFF" />
        <Text style={styles.TextLogocontainer}>TRANS MADE</Text>
      </View>
     
      <TouchableOpacity onPress={haldButonPageInputRegisterMotorista} style={styles.Buttoncontainer} >
        <Text style={styles.TextButtoncontainer} >Cadastrar motorista</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={haldButonPageInputsFormMadeireira} style={styles.Buttoncontainer} >
        <Text style={styles.TextButtoncontainer} >Cadastrar madeireira</Text>
      </TouchableOpacity>
    </View>
</ImageBackground>
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
    alignItems:'center',

    marginBottom:10
    
  },
  TextButtoncontainer:{
    fontSize:20,
    color:'#fff',
  },
  Logocontainer:{
    
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
  },
  TextLogocontainer:{
    fontSize:20,
    color:'#FFF'
  }
});
