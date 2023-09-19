import { Icons } from '@/components';
import './AddNewFolderBtn.css';

export class AddNewFolderBtn {
  self: string;

  constructor() {
    this.self = `
    <button class="folderBtn" type="button">
    ${Icons.Folder({
      width: '50px',
    })}
</button>
`;
  }
  render(parent: HTMLElement) {
    parent.insertAdjacentHTML('afterbegin', this.self);
  }
}
