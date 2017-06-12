import { Component, OnInit } from '@angular/core';
import { MenuOption } from "./menuOption.model";

@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.css']
})
export class CardSelectorComponent implements OnInit {

  menuOptions: MenuOption[] = [
    new MenuOption("Study by Year", "/studyby/year"),
    new MenuOption("Study by System", "/studyby/system"),
    new MenuOption("Study by Type", "/studyby/type")
  ]

  constructor() { }

  ngOnInit() {
  }

}
