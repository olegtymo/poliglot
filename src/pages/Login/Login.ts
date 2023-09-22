import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from 'firebase/auth';
import { update, ref, getDatabase } from 'firebase/database';

import { Router, _ROUTES_NAMES } from '@/utils';
import { Page } from '@/types';
import { PopUp } from '@/components';

import './Login.css';

type TypeElements = {
  form: HTMLFormElement;
  upperWrapper: HTMLDivElement;
  usernameLabel: HTMLLabelElement;
  usernameInput: HTMLInputElement;
  userpassLabel: HTMLLabelElement;
  userpassInput: HTMLInputElement;
  loginBtn: HTMLButtonElement;
  googleSignBtn: HTMLButtonElement;
  rememberMeLabel: HTMLLabelElement;
  rememberMeInput: HTMLInputElement;
  lowerWrapper: HTMLElement;
  cancelBtn: HTMLButtonElement;
  forgotPassSpan: HTMLSpanElement;
  forgotPassLink: HTMLAnchorElement;
};

export default class Login implements Page {
  elements: TypeElements;
  constructor() {
    this.elements = {
      form: document.createElement('form'),

      upperWrapper: document.createElement('div'),

      usernameLabel: document.createElement('label'),
      usernameInput: document.createElement('input'),

      userpassLabel: document.createElement('label'),
      userpassInput: document.createElement('input'),

      googleSignBtn: document.createElement('button'),
      loginBtn: document.createElement('button'),

      rememberMeLabel: document.createElement('label'),
      rememberMeInput: document.createElement('input'),

      lowerWrapper: document.createElement('div'),
      cancelBtn: document.createElement('button'),
      forgotPassSpan: document.createElement('span'),
      forgotPassLink: document.createElement('a'),
    };
  }

  // LoginForm.prototype.render
  render(parent: HTMLElement) {
    this.elements.form?.classList.add('login__form');
    this.elements.upperWrapper?.classList.add('login-form__upperWrapper');
    this.elements.lowerWrapper?.classList.add('login-form__lowerWrapper');

    this.elements.usernameLabel.classList.add('login__usernameLabel');
    this.elements.userpassLabel.classList.add('login__userpassLabel');

    this.elements.usernameLabel.htmlFor = 'username';
    this.elements.usernameLabel.innerHTML = '<b>E-mail</b>';
    this.elements.userpassLabel.htmlFor = 'userpass';
    this.elements.userpassLabel.innerHTML = '<b>Password</b>';

    this.elements.usernameInput.name = 'username';
    this.elements.userpassInput.name = 'userpass';
    this.elements.userpassInput.type = 'password';

    this.elements.googleSignBtn.textContent = 'Sign In with Google';
    this.elements.googleSignBtn.onclick = this.handleGoogleSignIn.bind(this);

    this.elements.loginBtn.textContent = 'Sign In';
    this.elements.loginBtn.onclick = this.handleSignIn.bind(this);

    this.elements.rememberMeInput.type = 'checkbox';
    this.elements.rememberMeLabel.innerText = 'Remember Me';
    this.elements.rememberMeLabel.append(this.elements.rememberMeInput);

    this.elements.cancelBtn.textContent = 'Cancel';
    this.elements.forgotPassSpan.textContent = 'Forgot';
    this.elements.forgotPassLink.textContent = ' password?';
    this.elements.forgotPassSpan.insertAdjacentElement('beforeend', this.elements.forgotPassLink);

    this.elements.upperWrapper.append(
      this.elements.usernameLabel,
      this.elements.usernameInput,
      this.elements.userpassLabel,
      this.elements.userpassInput,
      this.elements.googleSignBtn,
      this.elements.loginBtn,
      this.elements.rememberMeLabel,
    );
    this.elements.forgotPassSpan.append(this.elements.forgotPassLink);
    this.elements.lowerWrapper.append(this.elements.cancelBtn, this.elements.forgotPassSpan);
    this.elements.form.append(this.elements.upperWrapper, this.elements.lowerWrapper);

    parent?.append(this.elements.form);
  }

  handleSignIn(e: Event) {
    e.preventDefault();
    const email = this.elements.usernameInput.value;
    const password = this.elements.userpassInput.value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {      
        const user: User = userCredential.user;
        const dt = new Date();
        const db = getDatabase();
        const currentAuth = getAuth();

        update(ref(db, 'users/' + user.uid), {
          last_login: dt,
        });
        
        console.log(userCredential);

        Router.user = user;
        Router.navigate(_ROUTES_NAMES.HOME);
        new PopUp({
          message: 'You have logged in',
          parent: 'app',
          theme: 'primary',
        });
      })
      .catch((error) => {
        new PopUp({
          message: error,
          parent: 'app',
          theme: 'danger',
        });

        console.error(error);
      });
  }

  handleGoogleSignIn(e: Event) {
    e.preventDefault();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        Router.user = user;
        Router.navigate(_ROUTES_NAMES.HOME);
        new PopUp({
          message: 'You have just logged in',
          parent: 'app',
          theme: 'primary',
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorCode, errorMessage, email, credential);
      });
  }
}
