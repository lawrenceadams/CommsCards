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
    new MenuOption("Health Promotion", "/study/type/healthpromo"),
    new MenuOption("Types of Consultation/Skills", "/study/type/typesofconsul"),
    new MenuOption("Consent & Procedure", "/study/type/consentproc"),
    new MenuOption("Explanation & Planning", "/study/type/explainplan"),
    new MenuOption("Explaining Diseases", "/study/type/explaindisease")
  ]

  constructor() { }

  ngOnInit() {
  }

}
