import './FolderCard.css';

type TypeFolderCardElements = {
  wrapperDIV: HTMLDivElement;
  linkWrapper: HTMLAnchorElement;
  textEl: HTMLElement;
};
type TypeFolderCardProps = {
  text: string;
  imgSVG?: string | HTMLImageElement;
  customClass?: string;
  id?: string;
};

export default class FolderCard {
  text: string;
  svgEl?: string | HTMLImageElement;
  style?: string;
  elements: TypeFolderCardElements;
  parent?: HTMLDivElement;
  id?: string;

  constructor({ text, imgSVG, id, customClass = 'folderCard' }: TypeFolderCardProps) {
    this.id = id;
    this.svgEl = imgSVG;
    this.text = text;
    this.style = customClass;
    this.elements = {
      wrapperDIV: document.createElement('div'),
      linkWrapper: document.createElement('a'),
      textEl: document.createElement('p'),
    };
  }
  render(parent: HTMLDivElement) {
    this.parent = parent;

    if (this.svgEl) {
      if (typeof this.svgEl === 'string') {
        this.elements.linkWrapper.innerHTML += this.svgEl;
      } else {
        this.elements.linkWrapper.append(this.svgEl);
      }
    }
    this.elements.linkWrapper.href = this.text;
    this.elements.linkWrapper.dataset.id = this.id;
    this.elements.textEl.textContent = this.text!;
    this.elements.linkWrapper.append(this.elements.textEl);
    this.elements.wrapperDIV.classList.add(this.style as string);

    this.elements.wrapperDIV.append(this.elements.linkWrapper);
    this.parent.append(this.elements.wrapperDIV);
  }
}
