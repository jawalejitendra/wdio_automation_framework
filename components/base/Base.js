const SHORT = 3000;

class Base {
  constructor(locator) {
    this.id = null;
    this.locator = locator;
  }

  get() {
    return $(this.locator);
  }

  setId() {
    this.id = this.getElementId();
  }

  append(locator) {
    return this.locator.concat(locator);
  }

  waitUntilExists(timeout = SHORT) {
    this.get().waitForExist({ timeout });
  }

  getElementId() {
    this.waitUntilExists();
    return this.get().elementId;
  }

  getAttribute(attribute) {
    this.waitUntilExists();
    return this.get().getAttribute(attribute);
  }

  getCSSPropertyValue(cssProperty) {
    this.waitUntilExists();
    return this.get().getCSSProperty(cssProperty).value;
  }
}

export default Base;
