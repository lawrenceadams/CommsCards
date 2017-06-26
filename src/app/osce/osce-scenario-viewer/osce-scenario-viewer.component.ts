import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OSCE_SCENARIOS } from "../osceScenarios.store";
import { routeFadeStateTrigger } from "../../common/route.animations";

@Component({
  selector: 'app-osce-scenario-viewer',
  templateUrl: './osce-scenario-viewer.component.html',
  styleUrls: ['./osce-scenario-viewer.component.css'],
  animations: [routeFadeStateTrigger]
})
export class OsceScenarioViewerComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  private sub: any;
  id: number;
  activeView: string;
  public OSCES = OSCE_SCENARIOS;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(param => {
      this.id = param['id'];
    });
  }

  ngOnInit() {
    this.activeView = "question";
  }

  /**
   * Sets active button
   * @returns {void}
   */
  setActiveView(input): void {
    this.activeView = input;
  }

}
