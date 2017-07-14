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
import { FlashCardComponent } from './flash-card/flash-card.component';
import { MessageService } from "./common/services/messenger.service";
import { SafeHTMLPipe } from "./common/pipes/htmlSanitizerBypass.pipe";
import { UsefulLinksComponent } from './home/useful-links/useful-links.component';
import { OsceMenuComponent } from './osce/osce-menu/osce-menu.component';
import { OsceScenarioViewerComponent } from './osce/osce-scenario-viewer/osce-scenario-viewer.component';
import { GoogleAnalyticsEventsService } from './common/services/google-analytics-events.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'links', component: UsefulLinksComponent },
  { path: 'study', component: CardSelectorComponent },
  { path: 'study', redirectTo: 'study', pathMatch: "full" },
  { path: 'study/year', component: CardYearSelectorComponent },
  { path: 'study/system', component: CardSystemSelectorComponent },
  { path: 'study/type', component: CardTypeSelectorComponent },
  { path: 'study/osce', component: OsceMenuComponent },
  { path: 'study/osce/:id', component: OsceScenarioViewerComponent },
  { path: 'study/:query/:queryterm', component: StudyQueryHandlerComponent },
  { path: 'study/:query/:queryterm/card/:id', component: FlashCardComponent }
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
    MenuBuilderComponent,
    FlashCardComponent,
    SafeHTMLPipe,
    UsefulLinksComponent,
    OsceMenuComponent,
    OsceScenarioViewerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [
    CardProviderService,
    MessageService,
    GoogleAnalyticsEventsService,
    { provide: LocationStrategy, useClass: HashLocationStrategy } // Comment this out for non hash based routing
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
