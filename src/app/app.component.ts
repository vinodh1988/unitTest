import { Component ,ViewChild,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked} from '@angular/core';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app';
 }
