import { Component, OnInit } from '@angular/core';
import { MenuOption } from "app/card-selector/menuOption.model";

@Component({
  selector: 'app-card-type-selector',
  templateUrl: './card-type-selector.component.html',
  styleUrls: ['./card-type-selector.component.css']
})
export class CardTypeSelectorComponent implements OnInit {

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
