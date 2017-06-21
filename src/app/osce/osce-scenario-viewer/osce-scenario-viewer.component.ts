import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OSCE_SCENARIOS } from "../osceScenarios.store";

@Component({
  selector: 'app-osce-scenario-viewer',
  templateUrl: './osce-scenario-viewer.component.html',
  styleUrls: ['./osce-scenario-viewer.component.css']
})
export class OsceScenarioViewerComponent implements OnInit {

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
