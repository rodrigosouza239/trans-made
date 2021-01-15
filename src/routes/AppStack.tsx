import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import ListView from '../pages/ListView';

import Header from '../components/Header';

import AdminLogin from '../pages/AdminLogin';
import HeaderForm from '../components/HeaderForm';
import AdminPage from '../pages/AdminPage';
import LoginMADEIREIRA from '../pages/LoginMadeireira';
import PageMadeireira from '../pages/PageMadeireira';
import BemVindo from '../pages/BemVindo';
import Detail from '../pages/Detail';


import InputRegisterMotorista from '../components/InputsFormRegister';
import InputsFormMadeireira from '../components/InputsFormMadeireira';
import InputsFormRegisterFrete from '../components/InputsFormRegisterFrete';



const { Navigator, Screen } = createStackNavigator();



export default function Routes() {
  return (
      <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle:{ backgroundColor: '#f2f3f5'} }}>
             <Screen name="BemVindo" component={BemVindo} />
             <Screen 
             options={{
              headerShown:true,
              header: () => <HeaderForm/>
            }} 
             name="Login" component={Login} />
             <Screen options={{
               headerShown:true,
               header: () => <HeaderForm />
             }} name="Register" component={Register} />
             <Screen name="Home" component={Home} />
             <Screen name="ListView" component={ListView} />
             <Screen name="AdminPage" component={AdminPage} />
             <Screen  options={{
               headerShown:true,
               header: () => <HeaderForm />
             }}  name="AdminLogin" component={AdminLogin} />

       <Screen 
       options={{
        headerShown:true,
        header: () => <HeaderForm />
      }}
       name="InputRegisterMotorista" component={InputRegisterMotorista} />

<Screen 
       options={{
        headerShown:true,
        header: () => <HeaderForm />
      }}
       name="InputsFormMadeireira" component={InputsFormMadeireira} />



<Screen 
       options={{
        headerShown:true,
        header: () => <HeaderForm />
      }}
       name="LoginMADEIREIRA" component={LoginMADEIREIRA} />

<Screen 
       options={{
        headerShown:true,
        header: () => <HeaderForm />
      }}
       name="InputsFormRegisterFrete" component={InputsFormRegisterFrete} />

<Screen name="PageMadeireira" component={PageMadeireira} />
<Screen name="Detail" component={Detail} />
      </Navigator>
    </NavigationContainer>
  );
}

