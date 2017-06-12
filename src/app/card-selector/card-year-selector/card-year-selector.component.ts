import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuOption } from "../menuOption.model";
import { routeFadeStateTrigger } from "../../common/route.animations";

@Component({
  selector: 'app-card-year-selector',
  templateUrl: './card-year-selector.component.html',
  styleUrls: ['./card-year-selector.component.css'],
  animations: [routeFadeStateTrigger]
})
export class CardYearSelectorComponent implements OnInit {
  /*
    TODO: Setup CardProviderService
  */

  @HostBinding('@routeFadeState') routeAnimation = true;

  yearOptions: MenuOption[] = [
    new MenuOption("Year 1", "/study/year/1"),
    new MenuOption("Year 2", "/study/year/2"),
    new MenuOption("Year 3", "/study/year/3")
  ]

  constructor() { }

  ngOnInit() {
  }

}
