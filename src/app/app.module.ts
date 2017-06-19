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


const appRoutes: Routes = [
  { path: 'get-started', component: GetStartedComponent },
  { path: 'grid-basic', component: GridBasicComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'jumbotron', component: JumbotronComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    GridBasicComponent,
    TypographyComponent,
    TablesComponent,
    ImagesComponent,
    JumbotronComponent
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
