import './AddNewWordBtn.css';
import { Icons } from '@/components';
export class AddNewWordBtn {
  self: string;
  constructor() {
    this.self = `
    <button class="folderBtn" type="button">
    ${Icons.Plus({
      width: '50px',
    })}
</button>
`;
  }
  render(parent: HTMLElement) {
    parent.insertAdjacentHTML('afterbegin', this.self);
  }
}
