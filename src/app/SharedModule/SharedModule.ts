import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './Footer.Component/Footer.Component';
import { HeaderComponent } from './Header.Component/Header.Component';

@NgModule({
    declarations: [HeaderComponent,FooterComponent],
    imports: [
      BrowserModule,
      RouterModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent
    ],
    providers: []
  })
  export class SharedModule { }