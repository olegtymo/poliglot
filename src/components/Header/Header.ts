import { User } from "firebase/auth";

import { LoginBtn, RegistrationBtn, LogoutBtn } from "@/components";
import { Populated } from "@/types";
import { Router } from "@/utils";

export default class Header {
  title: string;
  loginBtn: LoginBtn;
  logoutBtn: LogoutBtn;
  registrationBtn: RegistrationBtn;
  elements: Populated;

  constructor(selfElement: HTMLElement | null, title: string) {
    this.title = title;
    this.loginBtn = new LoginBtn("Login");
    this.registrationBtn = new RegistrationBtn("Registration");
    this.logoutBtn = new LogoutBtn("Log Out");
    this.elements = {
      self: selfElement,
      title: document.createElement("h1"),
    };
  }
  render() {
    this.elements.title = this.title;

    this.elements.self?.append(this.elements.title);

    this.handleAuthChange();
  }

  handleAuthChange() {
    if (!Router.user) {
      this.logoutBtn.remove();

      this.loginBtn.render(this.elements.self);
      this.registrationBtn.render(this.elements.self);
    } else {
      this.loginBtn.remove();
      this.registrationBtn.remove();

      this.logoutBtn.render(this.elements.self);
    }
  }
}
