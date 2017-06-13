import { Component, OnInit } from '@angular/core';
import { CardProviderService } from "./common/services/card-provider.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cards: string[];

  constructor(public CardProviderService: CardProviderService) {
  }
}
