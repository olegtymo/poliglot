import './NewFolderForm.css';
type TypeElements = {
  form: HTMLFormElement;
  folderLabel: HTMLLabelElement;
  folderInput: HTMLInputElement;
  saveButton: HTMLButtonElement;
  cancelButton: HTMLButtonElement;
};

export default class NewFolderForm {
  elements: TypeElements;
  constructor() {
    this.elements = {
      form: document.createElement('form'),

      folderLabel: document.createElement('label'),
      folderInput: document.createElement('input'),

      saveButton: document.createElement('button'),
      cancelButton: document.createElement('button'),
    };
  }
  render(parent: Element | null) {
    this.elements.folderInput.type = 'text';

    this.elements.folderLabel.append(this.elements.folderInput);

    this.elements.saveButton.textContent = 'Save';
    this.elements.cancelButton.textContent = 'Cancel';
    this.elements.saveButton.addEventListener('click', (e) => {
      e.preventDefault();
      parent?.close();
    });
    this.elements.cancelButton.addEventListener('click', (e) => {
      e.preventDefault();
      parent?.close();
    });

    this.elements.form.append(
      this.elements.folderLabel,
      this.elements.saveButton,
      this.elements.cancelButton,
    );
    parent?.append(this.elements.form);
  }
}
