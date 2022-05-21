import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './SharedModule/SharedModule';
import { BestClientsComponent } from "./HomeComponents/best-clients/best-clients.component";
import { CareersComponent } from "./HomeComponents/careers/careers.component";
import { HomeComponent } from "./HomeComponents/Home.Compoennt/Home.Component";
import { LogInComponent } from "./HomeComponents/log-in/log-in.component";
import { OurRestaurentsComponent } from "./HomeComponents/our-restaurents/our-restaurents.component";
import { SignUpComponent } from "./HomeComponents/sign-up/sign-up.component";
import { AppModuleRouter } from './App.Module.Router';

@NgModule({
  declarations: [
    AppComponent,
    BestClientsComponent,
    CareersComponent,
    HomeComponent,
    LogInComponent,
    OurRestaurentsComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppModuleRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
