import Component from './Component';
const SHORT = 3000;

class Label extends Component {
  waitForText(timeOut = SHORT) {
    browser.waitUntil(
      () =>
        this.get()
          .getText()
          .match(/.+/),
      {
        timeout: timeOut,
        timeoutMsg: `expected text to exist after ${timeOut}ms`,
      },
    );
  }

  waitForAndGetText(timeOut = SHORT) {
    this.waitForText(timeOut);
    return this.get().getText();
  }
}

export default Label;
