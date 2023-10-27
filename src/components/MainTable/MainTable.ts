import { WordCardType, FolderCardType } from '@/types';
import { Icons, WordCard, FolderCard } from '@/components';

import './MainTable.css';

type TypeElements = {
  foldersWrapper: HTMLDivElement;
  headerWrapper: HTMLDivElement;
  inEnglishHeaderTitle: HTMLDivElement;
  translationHeaderTitle: HTMLDivElement;
  sampleHeaderTitle: HTMLDivElement;
  contentWrapper: HTMLDivElement;
};

export default class MainTable {
  elements: TypeElements;
  wordsFromDB: null | WordCardType[];
  foldersFromDB: null | FolderCardType[];
  parent: undefined | HTMLDivElement;

  constructor() {
    this.wordsFromDB = null;
    this.foldersFromDB = null;
    this.elements = {
      foldersWrapper: document.createElement('div'),
      headerWrapper: document.createElement('div'),
      inEnglishHeaderTitle: document.createElement('div'),
      translationHeaderTitle: document.createElement('div'),
      sampleHeaderTitle: document.createElement('div'),
      contentWrapper: document.createElement('div'),
    };
  }

  render(parent: HTMLDivElement) {
    this.elements.headerWrapper.replaceChildren();
    this.elements.contentWrapper.replaceChildren();

    this.elements.contentWrapper.addEventListener('click', (e: Event) => {
      this.getItemID(e);
    });

    this.parent = parent;
    this.renderContent();
    this.parent.append(this.elements.headerWrapper, this.elements.contentWrapper);
  }

  renderHeader() {
    this.elements.inEnglishHeaderTitle.textContent = 'Original';
    this.elements.translationHeaderTitle.textContent = 'Translation';
    this.elements.sampleHeaderTitle.textContent = 'Sample';

    this.elements.headerWrapper.classList.add('headerWrapper');

    this.elements.headerWrapper.append(
      this.elements.inEnglishHeaderTitle,
      this.elements.translationHeaderTitle,
      this.elements.sampleHeaderTitle,
    );
  }

  renderContent() {
    this.foldersFromDB?.forEach((el) => {
      const newCard = new FolderCard({
        id: el.id,
        text: el.name,
        imgSVG: Icons.Folder({ width: '20px' }),
      });
      newCard.render(this.elements.contentWrapper);
    });
    this.wordsFromDB?.forEach((el) => {
      // console.log(el);
      const newCard = new WordCard(el);
      newCard.render(this.elements.contentWrapper);
    });
  }
  getItemID(e: Event) {
    e.preventDefault();
    
    console.log(e);
  }
}
