
import { init, onUsersLisrClick } from "./js/helpers";
import { refs } from "./js/refs";


document.addEventListener('DOMContentLoaded', init);
refs.usersList.addEventListener('click', onUsersLisrClick)