import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';
import { 
  MdCheckboxModule,
  MdRadioModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdAutocompleteModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdGridListModule,
  MdCardModule,
  MdTabsModule,
  MdButtonToggleModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { GetStartedComponent } from './bootstrap/get-started/get-started.component';
import { GridBasicComponent } from './bootstrap/grid-basic/grid-basic.component';
import { TypographyComponent } from './bootstrap/typography/typography.component';
import { TablesComponent } from './bootstrap/tables/tables.component';
import { ImagesComponent } from './bootstrap/images/images.component';
import { JumbotronComponent } from './bootstrap/jumbotron/jumbotron.component';
import { WellsComponent } from './bootstrap/wells/wells.component';
import { AlertsComponent } from './bootstrap/alerts/alerts.component';
import { AnimationsComponent } from './bootstrap/animations/animations.component';
import { ButtonsComponent } from './bootstrap/buttons/buttons.component';
import { ButtonGroupsComponent } from './bootstrap/button-groups/button-groups.component';
import { DropdownDirective } from './bootstrap/shared/dropdown.directive';
import { GlyphiconsComponent } from './bootstrap/glyphicons/glyphicons.component';
import { BadgesAndLabelsComponent } from './bootstrap/badges-and-labels/badges-and-labels.component';
import { ProgressBarComponent } from './bootstrap/progress-bar/progress-bar.component';
import { CheckboxComponent } from './material/checkbox/checkbox.component';
import { DatepickerComponent } from './material/datepicker/datepicker.component';
import { AutocompleteComponent } from './material/autocomplete/autocomplete.component';
import { InputComponent } from './material/input/input.component';
import { RadioButtonComponent } from './material/radio-button/radio-button.component';
import { SelectComponent } from './material/select/select.component';
import { SliderComponent } from './material/slider/slider.component';
import { SlideToggleComponent } from './material/slide-toggle/slide-toggle.component';
import { MenuComponent } from './material/menu/menu.component';
import { SidenavComponent } from './material/sidenav/sidenav.component';
import { ToolbarComponent } from './material/toolbar/toolbar.component';
import { ListComponent } from './material/list/list.component';
import { SidenavListComponent } from './material/sidenav-list/sidenav-list.component';
import { GirdListComponent } from './material/gird-list/gird-list.component';
import { CardComponent } from './material/card/card.component';
import { TabsComponent } from './material/tabs/tabs.component';
import { ButtonComponent } from './material/button/button.component';
import { ButtonToggleComponent } from './material/button-toggle/button-toggle.component';

const appRoutes: Routes = [
  { path: '', component: GetStartedComponent },
  { path: 'bootstrap/get-started', component: GetStartedComponent },
  { path: 'bootstrap/grid-basic', component: GridBasicComponent },
  { path: 'bootstrap/typography', component: TypographyComponent },
  { path: 'bootstrap/tables', component: TablesComponent },
  { path: 'bootstrap/images', component: ImagesComponent },
  { path: 'bootstrap/jumbotron', component: JumbotronComponent },
  { path: 'bootstrap/wells', component: WellsComponent },
  { path: 'bootstrap/alerts', component: AlertsComponent },
  { path: 'bootstrap/animations', component: AnimationsComponent },
  { path: 'bootstrap/buttons', component: ButtonsComponent },
  { path: 'bootstrap/button-groups', component: ButtonGroupsComponent },
  { path: 'bootstrap/glyphicons', component: GlyphiconsComponent },
  { path: 'bootstrap/badges-and-labels', component: BadgesAndLabelsComponent },
  { path: 'bootstrap/progress-bar', component: ProgressBarComponent },
  { path: 'material/checkbox', component: CheckboxComponent },
  { path: 'material/datepicker', component: DatepickerComponent },
  { path: 'material/autocomplete', component: AutocompleteComponent },
  { path: 'material/input', component: InputComponent },
  { path: 'material/radio-button', component: RadioButtonComponent },
  { path: 'material/select', component: SelectComponent },
  { path: 'material/slider', component: SliderComponent },
  { path: 'material/slide-toggle', component: SlideToggleComponent },
  { path: 'material/menu', component: MenuComponent },
  { path: 'material/sidenav', component: SidenavComponent },
  { path: 'material/toolbar', component: ToolbarComponent },
  { path: 'material/list', component: ListComponent },
  { path: 'material/sidenav-list', component: SidenavListComponent },
  { path: 'material/grid-list', component: GirdListComponent },
  { path: 'material/card', component: CardComponent },
  { path: 'material/tabs', component: TabsComponent },
  { path: 'material/button', component: ButtonComponent },
  { path: 'material/button-toggle', component: ButtonToggleComponent },
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
    AlertsComponent,
    AnimationsComponent,
    ButtonsComponent,
    ButtonGroupsComponent,
    DropdownDirective,
    GlyphiconsComponent,
    BadgesAndLabelsComponent,
    ProgressBarComponent,
    CheckboxComponent,
    DatepickerComponent,
    AutocompleteComponent,
    InputComponent,
    RadioButtonComponent,
    SelectComponent,
    SliderComponent,
    SlideToggleComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
    ListComponent,
    SidenavListComponent,
    GirdListComponent,
    CardComponent,
    TabsComponent,
    ButtonComponent,
    ButtonToggleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdRadioModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdAutocompleteModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdTabsModule,
    MdButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
