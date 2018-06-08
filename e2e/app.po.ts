import { browser, by, element, ElementArrayFinder } from 'protractor';

export class Ang2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getListSize(){
  
    return element.all(by.css('app-root li')).then(
      function(x){
           return x.length;
      });
  }


}
