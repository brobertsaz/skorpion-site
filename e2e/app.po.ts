export class SkorpionSitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('skorpion-site-app h1')).getText();
  }
}
