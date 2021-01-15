
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';


import { useNavigation } from '@react-navigation/native';


export default function PageMadeireira() {
     const { navigate } = useNavigation();
     const navigation = useNavigation();

     function hadleNavigateToInputsFormRegisterFrete(){
      navigate('InputsFormRegisterFrete')
      }
  return (
    <View style={styles.container}>
         <View style={{justifyContent:'center',
        flexDirection:'row'}} >

           <TouchableOpacity onPress={hadleNavigateToInputsFormRegisterFrete} style={{backgroundColor:'#f9fafc',width:120,height:120,
             borderColor: '#dde3f0',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
             <Icon name="folder" size={34} color="#4CAF50" />
             <Text>Cadastrar frete</Text>
           </TouchableOpacity>


           <TouchableOpacity style={{backgroundColor:'#f9fafc',width:120,height:120,
             borderColor: '#dde3f0',borderWidth:1,justifyContent:'center',alignItems:'center',marginLeft:10}}>
             <Icon name="folder-plus" size={34} color="#4CAF50" />
             <Text>Meus fretes</Text>
           </TouchableOpacity>
           
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
