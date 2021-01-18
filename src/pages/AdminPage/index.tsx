
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import api from '../../database/api';


import { useNavigation } from '@react-navigation/native';

interface Item {
  id: number,
  cidade: string,
  uf: string,
  peso: string,
  valorfrete: string,
  razao: string,
  endereco: string,
  proprietario: string,
  cnpj: string,
  telefone: string,
  madeira: string,
  caminhao: string,
  quantidade: string,
  livre: string,
  pagarcarrego: string,
  pagaricms: string,
  adiantamento: string,
  valoradian: string,
}


export default function AdminPage() {
     const { navigate } = useNavigation();
     const navigation = useNavigation();
     const [madeireiras, setMadeireiras] = useState<Item[]>([])

     async function loadMadereira(){
      const response = await api.get('serrariadescricao');
      setMadeireiras(response.data);
      console.log(response);
     } 

    useEffect(() =>{
      loadMadereira();
    },[]);
    

  return (
    <View style={styles.container}>
         <View>
           <Text style={{fontSize:24,marginBottom:16,marginTop:48,color:"#13131a",fontWeight:'bold',textAlign:'center'}} >FRETES CADASTRADOS</Text>
      
           <FlatList style={{marginTop:82}}
            keyExtractor={id => String(id)}
            showsVerticalScrollIndicator={false}
            data={madeireiras} 
             renderItem={({
             item: madeireira
           }) =>(

            
               
            <View  style={styles.madereira}
            >

<View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center',paddingTop:20}} >
               <Text style={styles.containerText} >MADEIREIRA</Text>
               <Icon name="trash-2" size={23} color="#000" />
             </View>
              <View style={{justifyContent:'space-between', flexDirection:'row',alignItems:'center',paddingTop:10}} >
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >{madeireira.cidade}</Text>
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >{madeireira.razao}</Text>
              </View>
              <View style={{justifyContent:'space-between', flexDirection:'row',alignItems:'center',paddingTop:10}} >
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380' ,marginLeft:3}} >{madeireira.endereco}</Text>
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >{madeireira.uf}</Text>
              </View>

              <View style={{justifyContent:'space-between', flexDirection:'row',alignItems:'center',paddingTop:10}} >
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >{madeireira.proprietario}</Text>
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380' ,marginLeft:3}} >{madeireira.cnpj}</Text>
              </View>

              <View style={{justifyContent:'space-between', flexDirection:'row',alignItems:'center',paddingTop:10}} >
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >{madeireira.telefone}</Text>
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >{madeireira.madeira}</Text>
              </View>

              <View style={{justifyContent:'space-between', flexDirection:'row',alignItems:'center',paddingTop:10}} >
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380' ,marginLeft:3}} >{madeireira.caminhao}</Text>
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >{madeireira.quantidade}</Text>
              </View>

              <View style={{justifyContent:'space-between', flexDirection:'row',alignItems:'center',paddingTop:10}} >
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >{madeireira.valorfrete}</Text>
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380' ,marginLeft:3}} >{madeireira.livre}</Text>     
              </View>

              <View style={{justifyContent:'space-between', flexDirection:'row',alignItems:'center',paddingTop:10}} >
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380' ,marginLeft:3}} >{madeireira.pagarcarrego}</Text>
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >{madeireira.pagaricms}</Text>
              </View>

              <View style={{justifyContent:'space-between', flexDirection:'row',alignItems:'center',paddingTop:10}} >
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >{madeireira.adiantamento}</Text>
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380' ,marginLeft:3}} >{madeireira.valoradian}</Text>
              </View>
              <View>
              </View>
            </View>

           )}
           
           />
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
  containerText:{
    fontSize: 14, lineHeight:24, color: '#737380'
  },
  madereira:{
    backgroundColor:'#fafafc',
     borderWidth:1,
     borderColor: '#e6e6f0',
     height:340,
     marginBottom:10,
     borderRadius:8,
     paddingHorizontal:20,
     width:330,
     overflow: 'hidden'
   }
});
