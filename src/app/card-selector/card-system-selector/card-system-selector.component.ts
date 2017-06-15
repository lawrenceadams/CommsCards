import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuOption } from "../menuOption.model";
import { routeFadeStateTrigger } from "../../common/route.animations";

@Component({
  selector: 'app-card-system-selector',
  templateUrl: './card-system-selector.component.html',
  styleUrls: ['./card-system-selector.component.css'],
  animations: [routeFadeStateTrigger]
})
export class CardSystemSelectorComponent implements OnInit {

  @HostBinding('@routeFadeState') routeAnimation = true;

  systemOptions: MenuOption[] = [
    new MenuOption("Principles", "/studyby/system/principles"),
    new MenuOption("Respiratory", "/studyby/system/resp"),
    new MenuOption("Cardiovascular", "/studyby/system/cardio"),
    new MenuOption("Gastrointestinal", "/studyby/system/gi"),
    new MenuOption("Dermatology", "/studyby/system/derm"),
    new MenuOption("Muskuloskeletal", "/studyby/system/msk"),
    new MenuOption("Endocrine", "/studyby/system/endo"),
    new MenuOption("Child and Family", "/studyby/system/paeds"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
