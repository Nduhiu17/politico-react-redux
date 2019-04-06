import {LOGIN_USER} from "./types";


export const loginUser = (loginData) => dispatch => {
    console.log("login action called");
    fetch('https://politico-api-server.herokuapp.com/api/v2/auth/login',{
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(res => res.json())
        .then(user => dispatch({
          type: LOGIN_USER,
          payload: user
        })
        );
};