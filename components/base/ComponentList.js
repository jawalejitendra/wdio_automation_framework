import Base from './Base';

class ComponentList {
  constructor(locator) {
    this.locator = locator;
  }

  getAll(Type) {
    const components = [];
    try {
      new Base(this.locator).waitUntilExists();
      const elements = $$(this.locator);
      for (let index = 1; index <= elements.length; index += 1) {
        components.push(new Type(`${this.locator}:nth-of-type(${index})`));
      }
    } catch (error) {
      // elements may not have rendered in time,
      // continue and return empty array.
    }
    return components;
  }
}

export default ComponentList;
