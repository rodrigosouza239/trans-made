

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

  signForgot: async (email:any) => {
    const req = await fetch(`${BASE_API}/forgot`,{
      method: 'POST',
      headers:{
       Accept: 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({email})
    });
    const json = await req.json();
    return json;
},

signForgotCode: async (token:any) => {
  const req = await fetch(`${BASE_API}/verify`,{
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

signForgotPassSucesso: async (password:any, confirmPassword:any) => {
  const req = await fetch(`${BASE_API}/user/:id/changePassword`,{
    method: 'POST',
    headers:{
     Accept: 'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({password,confirmPassword})
  });
  const json = await req.json();
  return json;
},

  signUp: async (name:any,email:any,password:any,phone:any,employee:any) => {
    const req = await fetch(`${BASE_API}/users`,{
      method: 'POST',
      headers:{
       Accept: 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,email,password,phone,employee})
    });
    const json = await req.json();
    return json;
  },

  achadosperdidos: async (date:any, obs:any,entreguei:any,name:any,rg:any) => {
    const req = await fetch(`${BASE_API}/login`,{
      method: 'POST',
      headers:{
       Accept: 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({date,obs,entreguei,name,rg})
    });
    const json = await req.json();
    return json;
},


agendamento: async (date:any, obs:any,entreguei:any,name:any,rg:any) => {
  const req = await fetch(`${BASE_API}/login`,{
    method: 'POST',
    headers:{
     Accept: 'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({date,obs,entreguei,name,rg})
  });
  const json = await req.json();
  return json;
},

avarias: async (obs:any,) => {
  const req = await fetch(`${BASE_API}/damaged`,{
    method: 'POST',
    headers:{
     Accept: 'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({obs})
  });
  const json = await req.json();
  return json;
},

avariasget: async (obs:any,) => {
  const req = await fetch(`${BASE_API}/damaged`,{
    method: 'GET',
    headers:{
     Accept: 'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({obs})
  });
  const json = await req.json();
  return json;
},

combustivel: async (obs:any,) => {
  const req = await fetch(`${BASE_API}/login`,{
    method: 'POST',
    headers:{
     Accept: 'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({obs})
  });
  const json = await req.json();
  return json;
},


embarcação: async (name:any,proprietario:any,marca:any,modelo:any,ano:any,comprimentototal:any,motor:any,combustivel:any,) => {
  const req = await fetch(`${BASE_API}/vessels`,{
    method: 'POST',
    headers:{
     Accept: 'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({name,proprietario,marca,modelo,ano,comprimentototal,motor,combustivel,})});
  const json = await req.json();
  return json;
},

embarcaçãoget: async (name:any,proprietario:any,marca:any,modelo:any,ano:any,comprimentototal:any,motor:any,combustivel:any,) => {
  const req = await fetch(`${BASE_API}/login`,{
    method: 'GET',
    headers:{
     Accept: 'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({name,proprietario,marca,modelo,ano,comprimentototal,motor,combustivel,})});
  const json = await req.json();
  return json;
},

revisao: async ( lancha:any,date:any,hora:any,responsavel:any,revisao:any,tecnico:any,) => {
  const req = await fetch(`${BASE_API}/login`,{
    method: 'GET',
    headers:{
     Accept: 'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({ lancha,date,hora,responsavel,revisao,tecnico,})});
  const json = await req.json();
  return json;
},

checklist: async ( lancha:any,date:any,hora:any,responsavel:any,revisao:any,tecnico:any,) => {
  const req = await fetch(`${BASE_API}/login`,{
    method: 'GET',
    headers:{
     Accept: 'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({ lancha,date,hora,responsavel,revisao,tecnico,})});
  const json = await req.json();
  return json;
},

}