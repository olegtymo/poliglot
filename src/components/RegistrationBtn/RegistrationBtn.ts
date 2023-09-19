import { Router, _ROUTES_NAMES } from "@/utils";

export default class SignUpBtn {
  self: HTMLElement;
  text: string;

  constructor(text: string) {
    this.self = document.createElement("button");
    this.text = text;
  }

  render(parent: Element | null, className: string = "signup-btn") {
    this.self.textContent = this.text;
    this.self.addEventListener("click", (e) => this.handleClick(e));
    this.self.classList.add(className);

    parent?.append(this.self);
  }

  handleClick(e: Event) {
    e.preventDefault();
    Router.navigate(_ROUTES_NAMES.REGISTRATION);
  }

  remove() {
    this.self.remove();
  }
}
