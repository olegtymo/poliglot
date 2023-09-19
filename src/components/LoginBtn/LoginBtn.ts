import { Router, _ROUTES_NAMES } from "@/utils";

export default class LoginBtn {
  text: string;
  self: HTMLElement;

  constructor(text: string) {
    this.text = text;
    this.self = document.createElement("button");
  }

  render(parent: Element | null, className: string = "login-btn") {
    this.self.addEventListener("click", (e) => this.handleClick(e));
    this.self.classList.add(className);
    this.self.textContent = this.text;

    parent?.append(this.self);
  }

  handleClick(e: Event) {
    e.preventDefault();
    Router.navigate(_ROUTES_NAMES.LOGIN);
   
  }

  remove() {
    this.self.remove();
  }
}
