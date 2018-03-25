import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { RestangularModule, Restangular } from 'ngx-restangular';
// import { RestangularConfigFactory } from './shared/restConfig';




import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
