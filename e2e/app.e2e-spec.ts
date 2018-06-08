import { Ang2Page } from './app.po';
import {browser} from 'protractor';
describe('ang2 App', () => {
  let page: Ang2Page;

  beforeEach(() => {
    page = new Ang2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });

  it('should have 3 list items',()=>{
    page.navigateTo();
    expect(page.getListSize()).toEqual(3);
  
  });

 
  

});
