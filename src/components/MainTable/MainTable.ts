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

    this.parent = parent;
    // this.renderHeader();
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
        //entity: el
        text: el.name,
        imgSVG: Icons.Folder({ width: '20px' }),
      });
      newCard.render(this.elements.contentWrapper);
    });
    this.wordsFromDB?.forEach((el) => {
      const newCard = new WordCard(
        //el
        {
          inEnglish: el.inEnglish,
          translation: el.translation,
          sample: el.sample,
        },
      );
      newCard.render(this.elements.contentWrapper);
    });
  }
}
