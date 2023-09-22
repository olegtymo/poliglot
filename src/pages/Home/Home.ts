import { Button, Icons } from '@/components';
import { Page } from '@/types';
import './Home.css';

type TypeElements = {
  wrapper: HTMLDivElement;
  centerBox: HTMLDivElement;
};

export default class Home implements Page {
  elements: TypeElements;

  constructor() {
    this.elements = {
      wrapper: document.createElement('div'),
      centerBox: document.createElement('div'),
    };
    this.elements.wrapper.classList.add('home__wrapper');
  }

  render(parent: HTMLDivElement | Element | HTMLElement | null) {
    // console.log(this.elements.wrapper.getElementsByClassName('home__btn'));
    // console.log(this.elements.wrapper.getElementsByClassName('home__btn').length);
    debugger;
    const addWordBtn = new Button({
      children: Icons.Plus({ width: '50px' }),
      className: 'home__btn',
      onClick: () => {
        console.log('you clicked plus');
      },
    });
    addWordBtn.render(this.elements.wrapper);

    this.elements.wrapper.append(this.elements.centerBox);

    const addFolderBtn = new Button({
      children: Icons.Folder({ width: '50px' }),
      className: 'home__btn',
      onClick: () => {
        console.log('you clicked folder button');
      },
    });
    addFolderBtn.render(this.elements.wrapper);

    parent?.append(this.elements.wrapper);
  }
}
