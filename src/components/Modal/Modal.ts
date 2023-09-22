export default class Modal {
  elements: { dialog: HTMLDialogElement };
  constructor(form: string) {
    this.elements = {
      dialog: document.createElement('dialog'),
    };
  }
  render() {}
}
