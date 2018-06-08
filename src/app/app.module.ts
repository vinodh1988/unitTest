import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {DataServiceService} from './data-service.service';
import { TestPipe } from './test.pipe';
import { AuthServiceService} from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TestPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataServiceService,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
