import { Button } from '@/components';

import './NewWordForm.css';
type TypeElements = {
  form: HTMLFormElement;
  // parent: Element | null | HTMLDialogElement,
  wordInput: HTMLInputElement;
  translationInput: HTMLInputElement;
  sampleInput: HTMLInputElement;
  uploadImageInput: HTMLInputElement;
  uploadImageButton: Button;
  saveButton: Button;
  cancelButton: Button;
};
type TypeProps = {
  onClose: Function;
};

export default class NewWordForm {
  onClose: Function;
  elements: TypeElements;
  //TODO: make modal closing work
  constructor({ onClose }: TypeProps) {
    this.onClose = onClose;
    this.elements = {
      form: document.createElement('form'),
      wordInput: document.createElement('input'),
      translationInput: document.createElement('input'),
      sampleInput: document.createElement('input'),
      uploadImageInput: document.createElement('input'),
      uploadImageButton: new Button({
        text: 'Choose an image',
        onClick: (e: Event) => {
          this.uploadImgByClick(e);
        },
      }),
      saveButton: new Button({
        text: 'Save',
        className: 'saveBtn',
        onClick: (e: Event) => {},
      }),
      cancelButton: new Button({
        text: 'Cancel',
        className: 'cancelBtn',
        onClick: (e: Event) => {
          this.closeForm(e);
        },
      }),
    };
  }

  render(parent: Element | null | HTMLDialogElement) {
    this.parent = parent;
    this.elements.wordInput.type = 'text';
    this.elements.wordInput.placeholder = 'in English';

    this.elements.translationInput.type = 'text';
    this.elements.translationInput.placeholder = 'translation';

    this.elements.sampleInput.type = 'text';
    this.elements.sampleInput.placeholder = 'sample';

    this.elements.uploadImageInput.type = 'file';

    this.elements.uploadImageInput.hidden = true;

    this.elements.form.append(
      this.elements.wordInput,
      this.elements.translationInput,
      this.elements.sampleInput,
      this.elements.uploadImageInput,
    );

    this.elements.uploadImageButton.render(this.elements.form),
      this.elements.saveButton.render(this.elements.form),
      this.elements.cancelButton.render(this.elements.form),
      this.parent?.append(this.elements.form);
  }

  uploadImgByClick(e: Event) {
    e.preventDefault();
    this.elements.uploadImageInput.click();
  }

  submitForm(e: Event) {
    e.preventDefault();
    this.onClose();
  }

  closeForm(e: Event) {
    e.preventDefault();
    this.onClose();
  }
}
