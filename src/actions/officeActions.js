import {FETCH_OFFICES} from "./types";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTQ5MTE1NjQsIm5iZiI6MTU1NDkxMTU2NCwianRpIjoiNmM1ZDIwOGYtNGZlMS00Zjk2LTgzOWYtY2Q5ZTJmZWEzMTIyIiwiaWRlbnRpdHkiOiJhZG1pbkBnbWFpbC5jb20iLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.2ml5YSam4RkwXGSQYxPqSc9QPUes1yyw9ITANrcDM8s'

let currentToken = `Bearer ${token}`;//HARD CODING TOKEN
// let currentToken = `Bearer ${localStorage.getItem("token")}`;//getting token from local storage and assigning it to a reusable variable

export const fetchOffices = () => dispatch =>{
        console.log("offices action called")
        fetch('https://politico-api-server.herokuapp.com/api/v2/offices',{ method: "GET",headers: { "Content-Type": "application/json;charset=UTF-8", Authorization: currentToken}})
        .then(res => res.json())
        .then(offices => dispatch({
            type:FETCH_OFFICES,
            payload:offices.data
        })
        );
}
