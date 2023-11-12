import { refs } from "./refs"

export function renderAllUsers(users){
    const markup = users.map(({id, firstName, lastName, email, phone, image}) => {
        return `
        <li class="user-list-item" id='${id}'>
        <img src="${image}" alt="${firstName} ${lastName}">
        <div>
            <h2>${firstName} ${lastName}</h2>
                <p>${email}</p>
                <p>${phone}</p>
        </div>
      </li>`

    }).join('')
    refs.usersList.insertAdjacentHTML('beforeend', markup);
}

