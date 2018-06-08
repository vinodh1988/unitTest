import { TestBed, async,tick,fakeAsync } from '@angular/core/testing';
import { AuthServiceService } from './auth-service.service';
import { AppComponent } from './app.component';
import {ChildComponent } from './child/child.component';
declare var by;
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,ChildComponent
      ],
      providers: [AuthServiceService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  }));


  it('list length should be three and event should be working',
  async(()=>{
   
     const fixture=TestBed.createComponent(AppComponent);
     fixture.detectChanges();
     const ele=fixture.debugElement.nativeElement;
     var p=ele.getElementsByTagName('li');
     expect(p.length).toEqual(3);
     var q=ele.getElementsByTagName('app-child');
     var button=ele.getElementsByTagName('button')[0];

     expect(q[0].textContent).toContain('vista');
     
     button.click();
     fixture.detectChanges();
     console.log(q[0].textContent);
     expect(q[0].textContent).toContain('XP');
     
  }));
  

});
