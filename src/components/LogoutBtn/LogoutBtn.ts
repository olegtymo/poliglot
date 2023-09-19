import { getAuth, signOut } from 'firebase/auth';

import { Router, _ROUTES_NAMES } from '@/utils';

import './LogoutBtn.css';

export default class LogoutBtn {
  self: HTMLElement;
  text: string;

  constructor(text: string) {
    this.text = text;
    this.self = document.createElement('button');
  }

  render(parent: HTMLElement | null, className: string = 'signup-btn') {
    this.self.textContent = this.text;
    this.self.addEventListener('click', (e) => this.handleClick(e));
    this.self.classList.add(className);

    parent?.append(this.self);
  }

  async handleClick(e: Event) {
    await signOut(getAuth());

    console.log('You have signed out');
    // Router.navigate(_ROUTES_NAMES.HOME);

    // const errorCode = error.code;
    // const errorMessage = error.message;
    // console.error(error);
    // alert(`Something went wrong: ${errorCode} - ${errorMessage}`);
  }

  remove() {
    this.self.remove();
  }
}
