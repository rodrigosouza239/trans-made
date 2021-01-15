
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';


import { useNavigation } from '@react-navigation/native';

import Backgroud from '../../assets/backgroud.png';

export default function BemVindo() {
     const { navigate } = useNavigation();
     const navigation = useNavigation();

     function hadleNavigateToLoginMADEIREIRAPage(){
      navigate('Login')
      }

      function hadleNavigateToRegisterPage(){
        navigate('Register')
        }
  return (
    <>
      <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud} >
             <View style={styles.ViewForm}>
                   <Text style={styles.TextLogocontainer}>Maneira mais fácil de conseguir
                  seu transporte</Text>

                   <TouchableOpacity onPress={hadleNavigateToLoginMADEIREIRAPage} style={styles.Buttoncontainer} >
                     <Text style={styles.TextButtoncontainer} >Já tem cadastro ACESSA</Text>
                     <Icon name="arrow-right" size={23} color="#fff" />
                   </TouchableOpacity>

                   <TouchableOpacity onPress={hadleNavigateToRegisterPage} style={styles.Buttoncontainer2}> 
                     <Text style={styles.TextButtoncontainer2} >Cadastre-se no trans-made</Text>
                     <Icon name="truck"  size={23} color="#000" />
                   </TouchableOpacity>
             </View>
      </ImageBackground>
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
    width:328,
    height:54,
    borderRadius:25,
    borderWidth:1,
    borderColor:'#fff',
    marginBottom:20,
     
    justifyContent:'space-between',
    paddingHorizontal:23,
    alignItems:'center',
    flexDirection:'row'
    
  },

  Buttoncontainer2:{
    width:328,
    height:54,
    borderRadius:25,
    backgroundColor:'#fff',
     
    justifyContent:'space-between',
    paddingHorizontal:23,
    alignItems:'center',
    flexDirection:'row'
    
  },
  TextButtoncontainer:{
    fontSize:17,
    color:'#fff'
  },

  TextButtoncontainer2:{
    fontSize:17,
    color:'#000'
  },

  ViewForm:{
    paddingTop:530,
  },
  TextLogocontainer:{
    fontSize:25,
    color:'#FFF',
    maxWidth:350,
    marginBottom:50
  }
});
