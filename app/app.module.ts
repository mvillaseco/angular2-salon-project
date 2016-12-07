import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';



import { AppComponent }  from './app.component';
import { ClientDetailComponent } from './client-detail.component';
import { ClientsComponent }  from './clients.component';
import { ClientService }  from './client.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ClientDetailComponent, ClientsComponent ],
  providers: [
    ClientService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
