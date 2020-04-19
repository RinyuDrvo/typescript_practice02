import { v4 as uuidv4 } from 'uuid';

import { User } from "./User";

const user = new User('Rinyu', 'Drvo', 20);

const contentsElem = document.getElementById('contents');
if (!!contentsElem) {
  contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}

const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;

saibanButton.onclick = (e) => {
  uuidSpan.innerText = uuidv4();
}