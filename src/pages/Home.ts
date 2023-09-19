import { Button, Icons } from '@/components';
import { Page } from '@/types';

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
    const addWordBtn = new Button({
      children: Icons.Plus({ width: '50px' }),
      onClick: () => {
        console.log('you clicked plus');
      },
    });
    addWordBtn.render(this.elements.wrapper);
    const addFolderBtn = new Button({
      children: Icons.Folder({ width: '50px' }),
      onClick: () => {
        console.log('you clicked folder button');
      },
    });
    addFolderBtn.render(this.elements.wrapper);
    // const myAddNewWordBtn = new AddNewWordBtn();
    // myAddNewWordBtn.render(this.elements.leftBox);
    // const myAddNewFolder = new AddNewFolderBtn();
    // myAddNewFolder.render(this.elements.rightBox);

    this.elements.wrapper.append(
      this.elements.centerBox,
    );

    parent?.append(this.elements.wrapper);
  }
}
