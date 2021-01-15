import React,{useEffect,useState} from 'react';

import { View,Text,Linking,FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../database/api';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface Item {
  id: number,
  cidade: string,
  uf: string,
  peso: string,
  valorfrete: string,
}


function ListViewMadeireira(){
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

function handleLinkTowhatsapp(){
Linking.openURL(`whatsapp://send?phone=5592993711994`)
}

function handleToDetails(madeireira: any){
     navigation.navigate('Detail',{madeireira})
  }

       return (
         <View style={styles.container} >
           
           <Text style={{fontSize:30,marginBottom:16,marginTop:48,color:"#13131a",fontWeight:'bold'}} >Bem-vindo!</Text>
           <Text style={{fontSize: 16, lineHeight:24, color: '#737380'}} >Escolha um dos fretes abaixo</Text>
    
           <FlatList style={{marginTop:82}}
            keyExtractor={id => String(id)}
            showsVerticalScrollIndicator={false}
            data={madeireiras} 
             renderItem={({
             item: madeireira
           }) =>(
               
            <View  style={styles.madereira}
            >
              <View style={{justifyContent:'space-between', flexDirection:'row',alignItems:'center',paddingTop:10}} >
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >{madeireira.cidade}</Text>
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380'}} >- {madeireira.uf} - 24,000M</Text>
              <Text style={{fontSize: 14, lineHeight:24, color: '#737380' ,marginLeft:3}} >por {madeireira.valorfrete}</Text>
              </View>
              <View>
              <TouchableOpacity onPress={() => handleToDetails(madeireira)} style={{justifyContent:'space-between', flexDirection:'row',alignItems:'center',paddingTop:10,marginBottom:20}}  >
                <Text style={{marginRight:30, fontSize:16, fontWeight: 'bold'}} >Ver mais detalhes</Text>
                <Icon  name="arrow-right" size={16} color="#000" />
              </TouchableOpacity>
              </View>
            </View>

           )}
           
           />
         </View>
       )
}

export default ListViewMadeireira;