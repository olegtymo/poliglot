import './WordCard.css';
type TypeWordCardProps = {
  inEnglish?: string;
  translation?: string;
  sample?: string;
  id?: string;
};
type TypeWordCardElements = {
  wrapperDIV: HTMLDivElement;
  inEnglishDIV: HTMLDivElement;
  translationDIV: HTMLDivElement;
  sampleDIV: HTMLDivElement;
};

export default class WordCard {
  inEnglish?: string;
  translation?: string;
  sample?: string;
  styles?: string;
  elements: TypeWordCardElements;
  parent?: HTMLDivElement;

  constructor(
    { inEnglish, translation, sample, id }: TypeWordCardProps,
    customClass: string = 'wordCard',
  ) {
    this.inEnglish = inEnglish;
    this.translation = translation;
    this.sample = sample;
    this.styles = customClass;
    // this.id = id;

    this.elements = {
      wrapperDIV: document.createElement('div'),
      inEnglishDIV: document.createElement('div'),
      translationDIV: document.createElement('div'),
      sampleDIV: document.createElement('div'),
    };
  }
  render(parent: HTMLDivElement) {
    this.parent = parent;
    this.elements.wrapperDIV.classList.add(this.styles!);

    this.elements.inEnglishDIV.textContent = this.inEnglish!;
    this.elements.translationDIV.textContent = this.translation!;
    this.elements.sampleDIV.textContent = this.sample!;

    this.elements.wrapperDIV.append(
      this.elements.inEnglishDIV,
      this.elements.translationDIV,
      this.elements.sampleDIV,
    );
    this.parent.append(this.elements.wrapperDIV);
  }
}
