import { Page } from "@/types";

type TypeElements = {
  title: HTMLHeadingElement;
};

export default class Home implements Page {
  elements: TypeElements;

  constructor() {
    this.elements = {
      title: document.createElement("h2"),
    };
  }

  render(parent: Element | HTMLElement | null) {
    this.elements.title.textContent = "404 Not found";

    parent!.append(this.elements.title);
  }
}
