import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuOption } from "../../card-selector/menuOption.model";
import { routeFadeStateTrigger } from "../../common/route.animations";
import { OSCE_SCENARIOS } from "../osceScenarios.store";
import { Scenario } from "../osceScenarios.model";

@Component({
  selector: 'app-osce-menu',
  templateUrl: './osce-menu.component.html',
  styleUrls: ['./osce-menu.component.css'],
  animations: [routeFadeStateTrigger]
})
export class OsceMenuComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  filteredScenarios = {
    "year1": null as Scenario[],
    "year2": null as Scenario[],
    "year3": null as Scenario[],
  }

  constructor() {
    this.filteredScenarios.year1 = OSCE_SCENARIOS.filter(scen => scen.year === 1);
    this.filteredScenarios.year2 = OSCE_SCENARIOS.filter(scen => scen.year === 2);
    this.filteredScenarios.year3 = OSCE_SCENARIOS.filter(scen => scen.year === 3);
  }

  ngOnInit() {
  }

}
