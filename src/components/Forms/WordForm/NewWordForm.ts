import { Button } from "@/components";
import { saveWord } from "@/firebase/API";
import { Router } from "@/utils";
import { getFolders } from "@/firebase/API";

import "./NewWordForm.css";

type TypeElements = {
  form: HTMLFormElement;
  wordInput: HTMLInputElement;
  translationInput: HTMLInputElement;
  sampleInput: HTMLInputElement;
  uploadImageInput: HTMLInputElement;
  foldersSelect: HTMLSelectElement;
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
  parent: Element | null | HTMLDialogElement;
  constructor({ onClose }: TypeProps) {
    this.parent = null;
    this.onClose = onClose;
    this.elements = {
      form: document.createElement("form"),
      wordInput: document.createElement("input"),
      translationInput: document.createElement("input"),
      sampleInput: document.createElement("input"),
      uploadImageInput: document.createElement("input"),
      foldersSelect: document.createElement("select"),
      uploadImageButton: new Button({
        text: "Choose an image",
        onClick: (e: Event) => {
          this.uploadImgByClick(e);
        },
      }),
      saveButton: new Button({
        text: "Save",
        className: "saveBtn",
        onClick: (e: Event) => {
          this.submitForm(e);
        },
      }),
      cancelButton: new Button({
        text: "Cancel",
        className: "cancelBtn",
        onClick: (e: Event) => {
          this.closeForm(e);
        },
      }),
    };
  }

  render(parent: Element | null | HTMLDialogElement) {
    this.parent = parent;
    this.elements.wordInput.type = "text";
    this.elements.wordInput.placeholder = "in English";

    this.elements.translationInput.type = "text";
    this.elements.translationInput.placeholder = "translation";

    this.elements.sampleInput.type = "text";
    this.elements.sampleInput.placeholder = "sample";

    this.elements.uploadImageInput.type = "file";

    this.elements.uploadImageInput.hidden = true;

    this.renderSelectOnly();

    this.elements.form.append(
      this.elements.wordInput,
      this.elements.translationInput,
      this.elements.sampleInput,
      this.elements.uploadImageInput,
      this.elements.foldersSelect
    );

    this.elements.uploadImageButton.render(this.elements.form),
      this.elements.saveButton.render(this.elements.form),
      this.elements.cancelButton.render(this.elements.form),
      this.parent?.append(this.elements.form);
  }
  async renderSelectOnly() {
    this.elements.foldersSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "--Please choose a folder--";
    this.elements.foldersSelect.append(defaultOption);

    const data = await getFolders();
    data.forEach((folder) => {
      const folderOption = document.createElement("option");
      folderOption.value = folder.name;
      folderOption.textContent = folder.name;
      this.elements.foldersSelect.append(folderOption);
    });
  }

  uploadImgByClick(e: Event) {
    e.preventDefault();
    this.elements.uploadImageInput.click();
  }

  async submitForm(e: Event) {
    e.preventDefault();
    if (
      this.elements.wordInput.value.length === 0 ||
      this.elements.translationInput.value.length === 0 ||
      this.elements.sampleInput.value.length === 0
    ) {
      console.log("Please input any data into fields");
      return null;
    } else {
      const wordObj: { [key: string]: string | any } = {
        inEnglish: this.elements.wordInput.value,
        translation: this.elements.translationInput.value,
        sample: this.elements.sampleInput.value,
        owner: Router.user?.uid,
      };
      console.log(Router.user);
      saveWord(wordObj);
    }

    this.onClose();
  }

  closeForm(e: Event) {
    e.preventDefault();
    this.onClose();
  }
}
