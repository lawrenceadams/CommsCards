import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { CardProviderService } from './card-provider.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { CardSelectorComponent } from './card-selector/card-selector.component';
import { CardYearSelectorComponent } from './card-selector/card-year-selector/card-year-selector.component';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { CardSystemSelectorComponent } from './card-selector/card-system-selector/card-system-selector.component';
import { CardTypeSelectorComponent } from './card-selector/card-type-selector/card-type-selector.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'study', component: CardSelectorComponent },
  { path: 'study/year', component: CardYearSelectorComponent },
  { path: 'study/system', component: CardSystemSelectorComponent },
  { path: 'study/type', component: CardTypeSelectorComponent }
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
    CardTypeSelectorComponent
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
