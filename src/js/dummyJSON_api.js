import axios from "axios";

axios.defaults.baseURL = 'https://dummyjson.com';

export async function getAllUsers(){
    const {data} = await axios ('users')
    return data;
}

export async function getUserById(id){
    const responce = await axios (`users/${id}`);
    console.log(responce);
}