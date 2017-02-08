import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {LoginComponent} from './login/login.component'

import {rounting, appRoutingProviders} from './app.routing'
@NgModule({
    imports: [ BrowserModule, rounting ],
    declarations: [ AppComponent, HomeComponent,DashboardComponent, LoginComponent ],
    providers: [appRoutingProviders],
    bootstrap: [ AppComponent ]
})

export class AppModule {
    
 }