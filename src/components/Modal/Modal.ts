export default class Modal {
  elements: { dialog: HTMLDialogElement };
  constructor() {
    this.elements = {
      dialog: document.createElement('dialog'),
    };
  }
  render(parent: HTMLElement | null) {
    parent?.append(this.elements.dialog);
    this.elements.dialog.showModal();
  }
}
