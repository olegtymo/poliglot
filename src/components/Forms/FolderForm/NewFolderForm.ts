import { Button } from '@/components';

import './NewFolderForm.css';
type TypeElements = {
  form: HTMLFormElement;
  folderInput: HTMLInputElement;
  saveButton: Button;
  cancelButton: Button;
};
type TypeProps = {
  onClose: Function;
};

export default class NewFolderForm {
  elements: TypeElements;
  onClose: Function;

  //TODO: make modal closing work
  constructor({ onClose }: TypeProps) {
    this.onClose = onClose;
    this.elements = {
      form: document.createElement('form'),
      folderInput: document.createElement('input'),

      saveButton: new Button({
        text: 'Save',
        className: 'saveBtn',
        onClick: (e: Event) => {
          this.submitForm(e);
        },
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
  render(parent: Element | null) {
    this.parent = parent;
    this.elements.folderInput.type = 'text';

    this.elements.form.append(this.elements.folderInput);

    this.elements.saveButton.render(this.elements.form);
    this.elements.cancelButton.render(this.elements.form);

    this.parent?.append(this.elements.form);
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
