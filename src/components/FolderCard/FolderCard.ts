import './FolderCard.css';

type TypeFolderCardElements = {
  wrapperDIV: HTMLDivElement;
  textEl: HTMLElement;
};
type TypeFolderCardProps = {
  text?: string;
  imgSVG?: string;
  customClass?: string;
};

export default class FolderCard {
  text?: string;
  svgEl?: string;
  style?: string;
  elements: TypeFolderCardElements;
  parent?: HTMLDivElement;

  constructor({ text, imgSVG, customClass = 'folderCard' }: TypeFolderCardProps) {
    this.svgEl = imgSVG;
    this.text = text;
    this.style = customClass;
    this.elements = {
      wrapperDIV: document.createElement('div'),
      textEl: document.createElement('p'),
    };
  }
  render(parent: HTMLDivElement) {
    this.parent = parent;

    if (this.svgEl) {
      if (typeof this.svgEl === 'string') {
        this.elements.wrapperDIV.innerHTML += this.svgEl;
      } else {
        this.elements.wrapperDIV.append(this.svgEl);
      }
    }

    this.elements.textEl.textContent = this.text!;
    this.elements.wrapperDIV.classList.add(this.style as string);

    this.elements.wrapperDIV.append(this.elements.textEl);
    this.parent.append(this.elements.wrapperDIV);
  }
}
