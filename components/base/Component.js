import Base from './Base';
const SHORT = 3000;

class Component extends Base {
  isVisibleCurrently() {
    return this.get().isDisplayed();
  }

  waitUntilVisible(timeout = SHORT) {
    this.get().waitForDisplayed({ timeout });
  }

  isPresentCurrently() {
    return this.get().isExisting();
  }

  click() {
    this.get().waitForEnabled({ timeout: SHORT });
    this.get().click();
  }
}

export default Component;
