import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Angular material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
//fin angular material
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    //Angular material
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
    //fin angular material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
