import './PopUp.css';

type TypeElements = {
  box: HTMLElement;
  title: HTMLHeadingElement;
  closeBtn: HTMLButtonElement;
};
type TypeParams = {
  message: string;
  theme: string;
  parent: string;
};

export default class PopUp {
  elements: TypeElements;
  message: string;
  theme: string;
  parent: string;

  constructor(params: TypeParams) {
    this.message = params['message'];
    this.parent = params['parent'];
    this.theme = params['theme'] || 'default';

    this.elements = {
      box: document.createElement('div'),
      title: document.createElement('h4'),
      closeBtn: document.createElement('button'),
    };
    this.render();
  }
  render() {
    this.elements.box.classList.add('container');
    this.elements.box.classList.add(`popUp_${this.theme}`);

    this.elements.title.classList.add('title');
    this.elements.closeBtn.classList.add('btn');

    this.elements.closeBtn.classList.add('popUp__close');

    this.elements.title.textContent = this.message;

    this.elements.box.append(this.elements.title, this.elements.closeBtn);
    document.querySelector('#' + this.parent)?.append(this.elements.box);

    this.elements.box.addEventListener('animationend', () => {
      this.elements.box.remove();
    });

    this.elements.closeBtn.addEventListener('click', () => {
      this.elements.box.remove();
    });
  }
}
