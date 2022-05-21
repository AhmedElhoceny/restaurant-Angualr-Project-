import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BestClientsComponent } from "./HomeComponents/best-clients/best-clients.component";
import { CareersComponent } from "./HomeComponents/careers/careers.component";
import { HomeComponent } from "./HomeComponents/Home.Compoennt/Home.Component";
import { LogInComponent } from "./HomeComponents/log-in/log-in.component";
import { OurRestaurentsComponent } from "./HomeComponents/our-restaurents/our-restaurents.component";
import { SignUpComponent } from "./HomeComponents/sign-up/sign-up.component";

const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Restaurants', component: OurRestaurentsComponent },
    { path: 'BestClients', component: BestClientsComponent },
    { path: 'Careers', component: CareersComponent },
    { path: 'LogIn', component: LogInComponent },
    { path: 'SignUp', component: SignUpComponent },
    { path: '**', component: HomeComponent },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppModuleRouter {
    
}