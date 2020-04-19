import { User } from "./User";

const user = new User('Rinyu', 'Drvo', 20);

const contentsElem = document.getElementById('contents');
if (!!contentsElem) {
  contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}