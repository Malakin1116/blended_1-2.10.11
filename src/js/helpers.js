import { getAllUsers, getUserById } from "./dummyJSON_api";
import { renderAllUsers } from "./renderFunctions";

export async function init(){
    const {users} = await getAllUsers();
    renderAllUsers(users);
}

export function onUsersLisrClick(evt){
    console.log(evt);
    getUserById(1);
}