import { Button } from "@/components";
import { saveFolder, getFolder } from "@/firebase/API";
import { Router, _ROUTES_NAMES } from "@/utils";
import { PopUp } from "@/components";

import "./NewFolderForm.css";
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
  parent: Element | null;

  constructor({ onClose }: TypeProps) {
    this.onClose = onClose;
    this.elements = {
      form: document.createElement("form"),
      folderInput: document.createElement("input"),

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
  render(parent: Element | null) {
    this.parent = parent;
    this.elements.folderInput.type = "text";

    this.elements.form.append(this.elements.folderInput);

    this.elements.saveButton.render(this.elements.form);
    this.elements.cancelButton.render(this.elements.form);

    this.parent?.append(this.elements.form);
  }
  async submitForm(e: Event) {
    e.preventDefault();

    const folderObj = {
      name: this.elements.folderInput.value,
      owner: Router.user?.uid,
    };
    if (this.elements.folderInput.value.length === 0) {
      new PopUp({
        message: "Folder field can not be empty",
        parent: "app",
        theme: "danger",
      });
      throw new Error("Folder field can not be empty");
    }
    if ((await getFolder(folderObj.name)) !== null) {
      new PopUp({
        message: "The folder has already exist",
        parent: "app",
        theme: "danger",
      });
      throw new ReferenceError("The folder has already exist");
    }
    this.elements.folderInput.value = "";
    saveFolder(folderObj);
    this.onClose();
    Router.navigate(_ROUTES_NAMES.HOME);
  }
  closeForm(e: Event) {
    e.preventDefault();
    this.onClose();
  }
}
