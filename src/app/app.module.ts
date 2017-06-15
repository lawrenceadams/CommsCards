import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { CardProviderService } from './common/services/card-provider.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { CardSelectorComponent } from './card-selector/card-selector.component';
import { CardYearSelectorComponent } from './card-selector/card-year-selector/card-year-selector.component';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { CardSystemSelectorComponent } from './card-selector/card-system-selector/card-system-selector.component';
import { CardTypeSelectorComponent } from './card-selector/card-type-selector/card-type-selector.component';
import { StudyQueryHandlerComponent } from './study-query-handler/study-query-handler.component';
import { MenuBuilderComponent } from './common/menu-builder/menu-builder.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'studyby', component: CardSelectorComponent },
  { path: 'studyby/year', component: CardYearSelectorComponent },
  { path: 'studyby/system', component: CardSystemSelectorComponent },
  { path: 'studyby/type', component: CardTypeSelectorComponent },
  { path: 'studyby/:query/:queryterm', component: StudyQueryHandlerComponent },
  { path: 'studyby', redirectTo: 'studyby', pathMatch: "full" }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LegalComponent,
    CardSelectorComponent,
    CardYearSelectorComponent,
    CardSystemSelectorComponent,
    CardTypeSelectorComponent,
    StudyQueryHandlerComponent,
    MenuBuilderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [
    CardProviderService,
    { provide: LocationStrategy, useClass: HashLocationStrategy } // Comment this out for non hash based routing
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
