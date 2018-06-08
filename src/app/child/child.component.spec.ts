import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { DataServiceService } from '../data-service.service';
import {Http,HttpModule,XHRBackend,BaseRequestOptions} from '@angular/http';
import {MockBackend,} from '@angular/http/testing';
import {Observable} from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ],
      providers: [AuthServiceService]
      /*providers: [DataServiceService, MockBackend,
        BaseRequestOptions,
        {

          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {

                return new Http(backend, defaultOptions);

            }

         }],
        imports: [HttpModule]*/
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be greater than 1',async(()=>{
     expect(component.msg.length).toEqual(0);
     
     console.log(component.data);
  }));

  it('user should be elxsi',()=>{
     expect(component.user).toEqual('CGI');
  });

  
});
