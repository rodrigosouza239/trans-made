

const BASE_API = 'http://192.168.1.3:3333';

export default {
  checkToken: async (token:any) =>{
    const req = await fetch(`${BASE_API}/login`,{
      method: 'POST',
      headers:{
       Accept: 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({token})
    });
    const json = await req.json();
    return json;
  },

  signInSerraria: async (cnpj:any, password:any) => {
       const req = await fetch(`${BASE_API}/authserraria`,{
         method: 'POST',
         headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
         },
         body: JSON.stringify({cnpj,password})
       });
       const json = await req.json();
       return json;
  },

  signInTransportador: async (cpf:any, password:any) => {
    const req = await fetch(`${BASE_API}/authtransportador`,{
      method: 'POST',
      headers:{
       Accept: 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({cpf,password})
    });
    const json = await req.json();
    return json;
},

  AdminSign: async (email:any,password:any) => {
    const req = await fetch(`${BASE_API}/adminautentica`,{
      method: 'POST',
      headers:{
       Accept: 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({email,password})
    });
    const json = await req.json();
    return json;
},

}