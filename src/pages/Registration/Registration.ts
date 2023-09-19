import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { set, ref } from "firebase/database";
import { db, auth } from "@/firebase";

import { Router, _ROUTES_NAMES } from "@/utils";
import { Page } from "@/types";

import "./Registration.css";

type TypeElements = {
  form: HTMLFormElement;
  emailLabel: HTMLLabelElement;
  emailInput: HTMLInputElement;
  passwordLabel: HTMLLabelElement;
  passwordInput: HTMLInputElement;
  passwordRepeatLabel: HTMLLabelElement;
  passwordRepeatInput: HTMLInputElement;
  submitButton: HTMLButtonElement;
  container: HTMLDivElement;
};

// interface TypeElements {
//   [k: string]:
//     | HTMLElement
//     | HTMLDivElement
//     | HTMLInputElement
//     | HTMLButtonElement;
// }

export default class Registration implements Page {
  elements: TypeElements;

  constructor() {
    this.elements = {
      form: document.createElement("form"),
      emailLabel: document.createElement("label"),
      emailInput: this.createInput("email", "email"),
      passwordLabel: document.createElement("label"),
      passwordInput: this.createInput("password", "password"),
      passwordRepeatLabel: document.createElement("label"),
      passwordRepeatInput: this.createInput("password", "password"),
      submitButton: document.createElement("button"),
      container: document.createElement("div"),
    };
  }

  render(parent: HTMLElement) {
    this.elements.form.classList.add("signup-form");
    this.elements.submitButton.classList.add("signup-form__registerbtn");

    this.elements.submitButton.textContent = "Register";
    this.elements.passwordInput.type = "password";
    this.elements.passwordRepeatInput.type = "password";

    this.elements.container.innerHTML =
      '<p>Already have an account? <a id="loginLink" href="#">Sign in</a>.</p>';

    // TODO: revrite this link into the DOM element created with JS
    const link: HTMLLinkElement | null = this.elements.container.querySelector(
      "#loginLink"
    ) as HTMLLinkElement;

    link.onclick = (e) => {
      e.preventDefault();
      Router.navigate(_ROUTES_NAMES.LOGIN);
    };

    this.elements.submitButton.addEventListener(
      "click",
      this.handleSubmit.bind(this)
    );

    this.elements.emailLabel.innerHTML = "<b>Email</b>";
    this.elements.passwordLabel.innerHTML = "<b>Password</b>";
    this.elements.passwordRepeatLabel.innerHTML = "<b>Repeat Password</b>";

    

    this.elements.form.append(
      this.elements.emailLabel,
      this.elements.emailInput,
      this.elements.passwordLabel,
      this.elements.passwordInput,
      this.elements.passwordRepeatLabel,
      this.elements.passwordRepeatInput,
      this.elements.submitButton,
      this.elements.container
    );

    parent.appendChild(this.elements.form);
  }

  handleSubmit(e: Event) {
    const email: string = this.elements.emailInput.value;
    const password: string = this.elements.passwordInput.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user: User = userCredential.user;
        set(ref(db, "users/" + user.uid), {
          email: email,
        });

        alert("You have successfully signed up");
      })
      .catch((error) => {
        const errorCode: number = error.code;
        alert(errorCode);
      });
  }

  private createInput(type: string, name: string): HTMLInputElement {
    const input: HTMLInputElement = document.createElement("input");
    input.type = type;
    input.name = name;
    return input;
  }
}
