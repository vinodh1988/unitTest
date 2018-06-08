import { Injectable } from '@angular/core';
import  {Messages} from "structure-share/Messages";
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataServiceService {

  constructor(private http: Http) {
    
   }


  getMessages(){
    let url=
    "https://young-citadel-38417.herokuapp.com/rest-api/messages/all";
    return this.http.get(url)
        .map(this.extractData)
        .catch(this.handleError);

  }

  private extractData(res: Response) {
      console.log(res);
        let body = res.json();
        console.log("body");
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);

    }
}
