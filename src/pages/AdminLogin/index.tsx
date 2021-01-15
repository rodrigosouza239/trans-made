
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


import { useNavigation } from '@react-navigation/native';
import InputsFormAdmin from '../../components/InputsFormAdmin';

export default function AdminRegister() {
     const { navigate } = useNavigation();
     const navigation = useNavigation();
     function hadleNavigateToAdminPage(){
      navigate('AdminPage')
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
            <InputsFormAdmin />
          
            <TouchableOpacity onPress={hadleNavigateToAdminPage} style={styles.Buttoncontainer} >
              <Text style={styles.TextButtoncontainer} >Entrar</Text>
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
  }
});
