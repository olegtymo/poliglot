export class Modal {
  props: object;
  elements: {
    box: HTMLDialogElement;
    form: HTMLFormElement;

    wordInEnglishLabel: HTMLLabelElement;
    wordInEnglishInput: HTMLInputElement;

    transcriptionLabel: HTMLElement;
    transcriptionInput: HTMLInputElement;

    sampleLabel: HTMLLabelElement;
    sampleInput: HTMLInputElement;

    wordInUkrainianLabel: HTMLLabelElement;
    wordInUkrainianInput: HTMLInputElement;

    addImageBtn: HTMLButtonElement;
    addBtn: HTMLButtonElement;
    closeBtn: HTMLButtonElement;
  };
  constructor(props: object) {
    this.props = props;
    this.elements = {
      box: document.createElement("dialog"),

      form: document.createElement("form"),

      wordInEnglishLabel: document.createElement("label"),
      wordInEnglishInput: document.createElement("input"),

      wordInUkrainianInput: document.createElement("input"),
      wordInUkrainianLabel: document.createElement("label"),

      transcriptionLabel: document.createElement("label"),
      transcriptionInput: document.createElement("input"),

      sampleLabel: document.createElement("label"),
      sampleInput: document.createElement("input"),

      addImageBtn: document.createElement("button"),
      addBtn: document.createElement("button"),
      closeBtn: document.createElement("button"),
    };
  }
  render() {
    
  }
}
