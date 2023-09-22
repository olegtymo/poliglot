type TypeButtonProps = {
  text?: string;
  children?: HTMLElement | string;
  className?: string;
  onClick?: Function;
};

export default class Button {
  self: HTMLElement;
  text?: string;
  children?: HTMLElement | string;
  className?: string;
  onClick?: Function;

  constructor({ text, children, className, onClick }: TypeButtonProps) {
    this.self = document.createElement('button');
    this.text = text;
    this.children = children;
    this.className = className;
    this.onClick = onClick;
  }

  render(parent: HTMLElement) {
    if (parent.getElementsByTagName('button').length === 2) {
      return;
    } else {
      this.self.innerText = this.text || '';

      if (this.children) {
        if (typeof this.children === 'string') {
          this.self.innerHTML += this.children;
        } else {
          this.self.append(this.children);
        }
      }

      if (this.className) this.self.classList.add(this.className);

      this.self.addEventListener('click', (e: Event) => {
        if (this.onClick) {
          this.onClick(e);
        }
      });

      parent.append(this.self);
    }
  }
}
