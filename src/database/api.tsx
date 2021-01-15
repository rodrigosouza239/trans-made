import axios from 'axios';
import {  AsyncStorage, } from 'react-native';



const api = axios.create({
  baseURL:'http://192.168.1.3:3333',
  timeout:2000,
})


export default api;