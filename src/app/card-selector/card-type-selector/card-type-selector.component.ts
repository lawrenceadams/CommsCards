import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuOption } from "app/card-selector/menuOption.model";
import { routeFadeStateTrigger } from "../../common/route.animations";

@Component({
  selector: 'app-card-type-selector',
  templateUrl: './card-type-selector.component.html',
  styleUrls: ['./card-type-selector.component.css'],
  animations: [routeFadeStateTrigger]
})
export class CardTypeSelectorComponent implements OnInit {

  @HostBinding('@routeFadeState') routeAnimation = true;

  typeOptions: MenuOption[] = [
    new MenuOption("Health Promotion", "/studyby/type/healthpromo"),
    new MenuOption("Types of Consultation/Skills", "/studyby/type/typesofconsul"),
    new MenuOption("Consent & Procedure", "/studyby/type/consentproc"),
    new MenuOption("Explanation & Planning", "/studyby/type/explainplan"),
    new MenuOption("Explaining Diseases", "/studyby/type/explaindisease")
  ]

  constructor() { }

  ngOnInit() {
  }

}
