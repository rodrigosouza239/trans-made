
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

interface HeaderProps{
 title: string;
}

export default function Header() {
  const { navigate } = useNavigation();


  function hadleNavigateToRegisterPage(){
   navigate('Register')
   }

   function hadleNavigateToAdminPage(){
    navigate('AdminLogin')
    }
  return (
    <View style={styles.container}>
      <BorderlessButton  onPress={hadleNavigateToRegisterPage}>
              <Text>CRIAR CONTA</Text>
            </BorderlessButton>
            
            <BorderlessButton onPress={hadleNavigateToAdminPage}>
              <Text>ADMIN</Text>
            </BorderlessButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:24,
    backgroundColor:'#f9fafc',
    borderBottomWidth:1,
    borderColor: '#dde3f0',
    paddingTop:60,


    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },

});
