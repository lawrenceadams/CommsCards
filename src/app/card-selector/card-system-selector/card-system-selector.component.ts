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
