import {LOGIN_USER} from "./types";
import history from '../history';




export const loginUser = (loginData) => dispatch => {
    fetch('https://politico-api-server.herokuapp.com/api/v2/auth/login',{
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(res => res.json())
        .then((data) =>  {
            if(data.error){
              window.alert(data.error)
            }
            if(data.message){
                localStorage.setItem("token",data.access_token)
                localStorage.setItem("user",JSON.stringify(data.data))
                console.log(localStorage.getItem("token"))
                window.alert(data.message)
                history.push('/offices')
                  }

  })


      .catch((err)=>{
        alert("Something unexpected happened")
      })
        .then(user => dispatch({
          type: LOGIN_USER,
          payload: user
        })
        );
};

