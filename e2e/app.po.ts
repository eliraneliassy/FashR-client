import { browser, element, by } from 'protractor';

export class FashRClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fashR-root h1')).getText();
  }
}
