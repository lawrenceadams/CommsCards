import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuOption } from "../menuOption.model";

@Component({
  selector: 'app-card-year-selector',
  templateUrl: './card-year-selector.component.html',
  styleUrls: ['./card-year-selector.component.css']
})
export class CardYearSelectorComponent implements OnInit {
  /*
    TODO: Setup CardProviderService
  */

  yearOptions: MenuOption[] = [
    new MenuOption("Year 1", "/study/year/1"),
    new MenuOption("Year 2", "/study/year/2"),
    new MenuOption("Year 3", "/study/year/3")
  ]

  constructor() { }

  ngOnInit() {
  }

}
