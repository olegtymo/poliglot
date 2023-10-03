import { NewFolderForm, NewWordForm } from '@/components';

type Form = NewFolderForm | NewWordForm;
type ElementsType = {
  dialog: HTMLDialogElement;
  contentWrapper: HTMLDivElement;
};

export default class Modal {
  content: Form | null;
  elements: ElementsType;
  constructor() {
    this.content = null;
    this.elements = {
      dialog: document.createElement('dialog'),
      contentWrapper: document.createElement('div'),
    };
  }

  setContent(newContent: Form) {
    this.content = newContent;
  }

  render(parent: HTMLElement | null) {
    this.content?.render(this.elements.contentWrapper);
    this.elements.dialog.append(this.elements.contentWrapper);

    parent?.append(this.elements.dialog);

    this.elements.dialog.showModal();
  }

  close() {
    this.elements.dialog.close();
  }
}
