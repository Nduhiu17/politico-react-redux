import { REGISTER_USER } from "./types";

export const registerUser = (registerData) => dispatch => {
    fetch('https://politico-api-server.herokuapp.com/api/v2/auth/signup',{
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(registerData)
    })
        .then(res => res.json())
        .then((data) =>  {
            if(data.error){
              window.alert(data.error)
            }
            if(data.message){
              window.alert(data.message)
            }
  })
      .catch((err)=>{
        alert("Something unexpected happened")
      })
        .then(user => dispatch({
          type: REGISTER_USER,
          payload: user
        })
        );
};