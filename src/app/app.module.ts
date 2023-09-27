import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from './utils/alerts/alert.service';
import { HomeComponent } from './components/home/home.component';
import { AlertsMsgComponent } from './utils/alerts/alerts-msg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';

import { LOCALE_ID } from '@angular/core';
import localeEc from '@angular/common/locales/es-EC';
import { registerLocaleData } from '@angular/common';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import { ToolbarComponent } from './components/home/toolbar/toolbar.component';
import { PagesComponent } from './components/home/pages/pages.component';
import { PersonService } from './services/person.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
registerLocaleData(localeEc, 'es');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AlertsMsgComponent,
    SidebarComponent,ToolbarComponent, PagesComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  exports: [
    
  ],
  providers: [
    AlertService,PersonService,
    { provide: LOCALE_ID, useValue: 'es' },AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
