import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from './app.component';
import { CardProviderService } from './card-provider.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { CardSelectorComponent } from './card-selector/card-selector.component';
import { CardYearSelectorComponent } from './card-selector/card-year-selector/card-year-selector.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'study', component: CardSelectorComponent },
  { path: 'study/year', component: CardYearSelectorComponent }
  // { path: 'cardselector', component: AboutComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LegalComponent,
    CardSelectorComponent,
    CardYearSelectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CardProviderService,
    { provide: LocationStrategy, useClass: HashLocationStrategy } // Comment this out for non hash based routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
