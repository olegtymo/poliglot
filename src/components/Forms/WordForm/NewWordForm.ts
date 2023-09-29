import './NewWordForm.css';
type TypeElements = {
  form: HTMLFormElement;
  wordInput: HTMLInputElement;
  translationInput: HTMLInputElement;
  sampleInput: HTMLInputElement;
  uploadImageInput: HTMLInputElement;
  uploadImageButton: HTMLButtonElement;
  saveButton: HTMLButtonElement;
  cancelButton: HTMLButtonElement;
};

export default class NewWordForm {
  elements: TypeElements;
  constructor() {
    this.elements = {
      form: document.createElement('form'),
      wordInput: document.createElement('input'),
      translationInput: document.createElement('input'),
      sampleInput: document.createElement('input'),
      uploadImageInput: document.createElement('input'),
      uploadImageButton: document.createElement('button'),
      saveButton: document.createElement('button'),
      cancelButton: document.createElement('button'),
    };
  }
  render(parent: Element | null | HTMLDialogElement) {
    this.elements.wordInput.type = 'text';
    this.elements.wordInput.placeholder = 'in English';

    this.elements.translationInput.type = 'text';
    this.elements.translationInput.placeholder = 'translation';

    this.elements.sampleInput.type = 'text';
    this.elements.sampleInput.placeholder = 'sample';

    this.elements.uploadImageInput.type = 'file';

    this.elements.uploadImageInput.hidden = true;

    this.elements.uploadImageButton.textContent = 'Choose an image';
    this.elements.saveButton.textContent = 'Save';
    this.elements.cancelButton.textContent = 'Cancel';

    this.elements.uploadImageButton.addEventListener('click', (e) => {
      this.uploadImgByClick(e);
    });
    this.elements.saveButton.addEventListener('click', (e) => {
      e.preventDefault();
      parent?.close();
    });
    this.elements.cancelButton.addEventListener('click', (e) => {
      e.preventDefault();
      parent?.close();
    });

    this.elements.form.append(
      this.elements.wordInput,
      this.elements.translationInput,
      this.elements.sampleInput,
      this.elements.uploadImageInput,
      this.elements.uploadImageButton,
      this.elements.saveButton,
      this.elements.cancelButton,
    );
    parent?.append(this.elements.form);
  }
  uploadImgByClick(e: Event) {
    e.preventDefault();
    this.elements.uploadImageInput.click();
  }
}
