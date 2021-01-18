import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Linking} from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
;

export default function Details() {
  const route:any = useRoute();

  const madeireira = route.params.madeireira;


  function handleLinkTowhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5592993711994`)
    }

  return (
    <View style={styles.container}>
       <StatusBar />
     <View style={{ backgroundColor:'#fafafc',
       borderWidth:1,
       borderColor: '#e6e6f0',
       height:250,
       marginBottom:10,
       borderRadius:8,
       paddingHorizontal:20,
       width:330,
       overflow: 'hidden'}}>
       
       <View style={{flexDirection:'row', justifyContent: 'space-between',marginTop:10,}} >
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >Tipo de Madeira:</Text>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >{madeireira.madeira}</Text>
       </View>
       <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >Total de Metros m3:</Text>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >Madeira:</Text>
       </View>
       <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >Valor do Frete p/m3:</Text>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >{madeireira.valorfrete}</Text>
       </View>

        <Text style={{fontSize: 19, lineHeight:24, color: '#000', fontWeight:'bold',marginBottom:10,marginTop:10}} >Despesas</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >Carregamento:</Text>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >Madeira:</Text>
       </View>
       <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >ICMS de Frete:</Text>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >Madeira:</Text>
       </View>
       <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >Adiantamento:</Text>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >{madeireira.adiantamento}</Text>
       </View>
       <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >Cidade de Carrego:</Text>
         <Text style={{fontSize: 14, lineHeight:24, color: '#737380',textAlign:'left'}} >{madeireira.cidade},{madeireira.uf}</Text>
       </View>
     </View>
   
   <TouchableOpacity style={{  backgroundColor:'#000',
    width:320,
    height:50,
    borderRadius:25,
   
    justifyContent:'center',
    alignItems:'center'}} onPress={handleLinkTowhatsapp}>
         <Text style={{fontSize: 14, lineHeight:24, color: '#fff'}} >Entrar em Contato</Text>
       </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f5',
    justifyContent:'center',
    alignItems:'center'
  },
});
