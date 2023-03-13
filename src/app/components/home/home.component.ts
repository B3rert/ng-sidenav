import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 //Abrir/Cerrar SideNav
 @ViewChild('sidenav')
 sidenav!: MatSidenav;
 @ViewChild('sidenavend')
 sidenavend!: MatSidenav;

 close(reason: string) {
   this.sidenav.close();
   this.sidenavend.close();
 }
}
