import Modal from '@/components/Modal/Modal';
import NewWordForm from '@/components/Forms/WordForm/NewWordForm';
import NewFolderForm from '@/components/Forms/FolderForm/NewFolderForm';

import { Button, Icons } from '@/components';
import { Page } from '@/types';

import './Home.css';

type TypeElements = {
  wrapper: HTMLDivElement;
  centerBox: HTMLDivElement;
  addWordBtn: Button;
  addFolderBtn: Button;
};

export default class Home implements Page {
  elements: TypeElements;
  modal: Modal;
  wordForm: NewWordForm;
  folderForm: NewFolderForm;

  constructor() {
    this.modal = new Modal();
    const handleModalClose = () => this.modal.close()
    
    this.wordForm = new NewWordForm({
      onClose: handleModalClose
    });
    this.folderForm = new NewFolderForm({
      onClose: handleModalClose
    });

    this.elements = {
      wrapper: document.createElement('div'),
      centerBox: document.createElement('div'),
      addWordBtn: new Button({
        children: Icons.Plus({ width: '50px' }),
        className: 'home__btn',
        onClick: () => {
          this.modal.setContent(this.wordForm);
          this.modal.render(this.elements.wrapper);
        },
      }),
      addFolderBtn: new Button({
        children: Icons.Folder({ width: '50px' }),
        className: 'home__btn',
        onClick: () => {
          this.modal.setContent(this.folderForm);
          this.modal.render(this.elements.wrapper);
        },
      }),
    };
    this.elements.wrapper.classList.add('home__wrapper');
  }

  render(parent: HTMLDivElement | Element | HTMLElement | null) {
    this.elements.addWordBtn.render(this.elements.wrapper);

    this.elements.wrapper.append(this.elements.centerBox);

    this.elements.addFolderBtn.render(this.elements.wrapper);

    parent?.append(this.elements.wrapper);
  }
}
