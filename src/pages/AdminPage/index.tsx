
import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';



import { useNavigation } from '@react-navigation/native';


export default function AdminPage() {
     const { navigate } = useNavigation();
     const navigation = useNavigation();

     function hadleNavigateToRegisterPage(){
      navigate('Register')
      }
  return (
    <View style={styles.container}>
         <View>
           <Text style={{fontSize:24,marginBottom:16,marginTop:48,color:"#13131a",fontWeight:'bold',textAlign:'center'}} >FRETES CADASTRADOS</Text>
           <View style={styles.viewList} >
             <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center',paddingTop:20}} >
               <Text style={styles.containerText} >CASO</Text>
               <Icon name="trash-2" size={23} color="#000" />
             </View>
             <Text style={styles.containerText} >CASO</Text>
             <Text style={styles.containerText}>CASO</Text>
             <Text style={styles.containerText}>VALOR</Text>
           </View>
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
  viewList:{
       backgroundColor:'#fafafc',
       borderWidth:1,
       borderColor: '#e6e6f0',
       height:150,
       marginBottom:10,
       borderRadius:8,
       paddingHorizontal:20,
       width:330,
       overflow: 'hidden'
  },
  containerText:{
    fontSize: 14, lineHeight:24, color: '#737380'
  }
});
