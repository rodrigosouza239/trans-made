
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

interface HeaderProps{
 title: string;
}

export default function HeaderForm() {
  const navigation = useNavigation();



  return (
    <View style={styles.container}>
      <BorderlessButton style={{left:10}} onPress={navigation.goBack} >
              <Icon name="arrow-left" size={25} />
            </BorderlessButton>
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:70,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

  },

});
