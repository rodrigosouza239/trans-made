import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';


import ListViewMadeireira from '../../components/ListViewMadeireira/ListViewMadeireira';

export default function Home() {
  return (
    <View style={styles.container}>
    
      <ListViewMadeireira />
     
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f5',
  },
});
