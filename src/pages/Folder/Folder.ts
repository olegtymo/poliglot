import { Page } from '@/types';
import MainTable from '@/components/MainTable/MainTable';
import './Folder.css';

type TypeElements = {
  wrapper: HTMLDivElement;
  tableBox: HTMLDivElement;
  gameBox: HTMLDivElement;
};

export default class Folder implements Page {
  elements: TypeElements;
  table: MainTable;
  constructor() {
    
    this.table = new MainTable();
    this.elements = {
      wrapper: document.createElement('div'),
      tableBox: document.createElement('div'),
      gameBox: document.createElement('div'),
    };
  }
  render(parent: HTMLDivElement | Element | HTMLElement | null) {    
    this.table.render(this.elements.tableBox);
    this.elements.wrapper.append(this.elements.tableBox, this.elements.gameBox);
    parent?.append(this.elements.wrapper);
  }
}
