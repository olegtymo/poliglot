import Modal from '@/components/Modal/Modal';
import NewWordForm from '@/components/Forms/WordForm/NewWordForm';
import NewFolderForm from '@/components/Forms/FolderForm/NewFolderForm';

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
    const addWordBtn = new Button({
      children: Icons.Plus({ width: '50px' }),
      className: 'home__btn',
      onClick: () => {
        const newModal = new Modal();
        newModal.render(this.elements.wrapper);
        const wordForm = new NewWordForm();
        wordForm.render(newModal.elements.dialog);

        console.dir(newModal.elements.dialog);
        console.log('you clicked plus');
      },
    });
    addWordBtn.render(this.elements.wrapper);

    this.elements.wrapper.append(this.elements.centerBox);

    const addFolderBtn = new Button({
      children: Icons.Folder({ width: '50px' }),
      className: 'home__btn',
      onClick: () => {
        const newModal = new Modal();
        newModal.render(this.elements.wrapper);
        const folderForm = new NewFolderForm();
        folderForm.render(newModal.elements.dialog);
        console.log('you clicked folder button');
      },
    });
    addFolderBtn.render(this.elements.wrapper);

    parent?.append(this.elements.wrapper);
  }
}
