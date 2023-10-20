export interface Page {
  elements: object;
  render(parent: Element | HTMLElement | null): void;
}

export type Populated = {
  /**
   * @description
   * This represents the properties that get loaded later on to any type of object
   */
  [k: string]: any;
};

export type WordCardType = {
  inEnglish: string;
  translation: string;
  sample: string;
};
export type FolderCardType = {
  name: string;
  owner: string;
};
