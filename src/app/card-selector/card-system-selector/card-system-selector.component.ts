import { Component, OnInit } from '@angular/core';
import { MenuOption } from "../menuOption.model";

@Component({
  selector: 'app-card-system-selector',
  templateUrl: './card-system-selector.component.html',
  styleUrls: ['./card-system-selector.component.css']
})
export class CardSystemSelectorComponent implements OnInit {

  systemOptions: MenuOption[] = [
    new MenuOption("Principles", "/study/system/principles"),
    new MenuOption("Respiratory", "/study/system/resp"),
    new MenuOption("Cardiovascular", "/study/system/cvs"),
    new MenuOption("Gastrointestinal", "/study/system/gi"),
    new MenuOption("Dermatology", "/study/system/derm"),
    new MenuOption("Muskuloskeletal", "/study/system/msk"),
    new MenuOption("Endocrine", "/study/system/endo"),
    new MenuOption("Child and Family", "/study/system/paeds"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
