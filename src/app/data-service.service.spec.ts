import { TestBed, inject ,async,fakeAsync} from '@angular/core/testing';
import { Messages } from 'structure-share/Messages';
import { DataServiceService } from './data-service.service';
import {Http} from '@angular/http';
import {HttpModule,XHRBackend,BaseRequestOptions,ResponseOptions,Response} from '@angular/http';
import {MockBackend,} from '@angular/http/testing';
import {Observable} from 'rxjs';
describe('DataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataServiceService,
       
         { provide: 'https://young-citadel-38417.herokuapp.com/rest-api/messages/all', useValue: 'http://example.com' },
       
          { provide: XHRBackend, useClass: MockBackend },
       ],
      imports:[HttpModule]
    });
  });

  it('should have size', inject([DataServiceService,XHRBackend], (service: DataServiceService,mockback: MockBackend) => {
    
        const mockResponse= 
      [
         {msgno:101,message:"Hi! This app is working",likes:12,favs:14,userid:"vinodh",timestamp:"12, jan 2017"},
         {msgno:102,message:"World is so small",likes:100,favs:30,userid:"vinodh",timestamp:"12, Jan 2013 "},
         {msgno:103,message:"Indians are  Indians",likes:300,favs:30,userid:"vinodh",timestamp:"12,jan 2017"},
         {msgno:104,message:"He is very honest",likes:50,favs:78,userid:"vinodh",timestamp:"12 oct 2015"}
      ];
     
        
         mockback.connections.subscribe((connection) => {
        
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
    service.getMessages().subscribe(
      x=>{
        console.log(x);
        console.log("This is working!!!");
        expect(x.length).toBeGreaterThan(2);
        expect(x[0].msgno).toBeGreaterThanOrEqual(100);
      }
      ,
      y=>{
        console.log("error");
      }
      
    );

  }));
});

