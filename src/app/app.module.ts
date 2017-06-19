import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { GridBasicComponent } from './grid-basic/grid-basic.component';
import { TypographyComponent } from './typography/typography.component';
import { TablesComponent } from './tables/tables.component';
import { ImagesComponent } from './images/images.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { WellsComponent } from './wells/wells.component';
import { AlertsComponent } from './alerts/alerts.component';


const appRoutes: Routes = [
  { path: '', component: GetStartedComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'grid-basic', component: GridBasicComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'jumbotron', component: JumbotronComponent },
  { path: 'wells', component: WellsComponent },
  { path: 'alerts', component: AlertsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    GridBasicComponent,
    TypographyComponent,
    TablesComponent,
    ImagesComponent,
    JumbotronComponent,
    WellsComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
