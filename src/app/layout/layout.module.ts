import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    UserdashboardComponent
  ],
  imports: [
    CommonModule,

    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    UserdashboardComponent
  ]
})
export class LayoutModule { }
