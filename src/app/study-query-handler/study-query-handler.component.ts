import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { routeFadeStateTrigger } from "../common/route.animations";

@Component({
  selector: 'app-study-query-handler',
  templateUrl: './study-query-handler.component.html',
  styleUrls: ['./study-query-handler.component.css'],
  animations: [routeFadeStateTrigger]
})
export class StudyQueryHandlerComponent implements OnInit {

  @HostBinding('@routeFadeState') routeAnimation = true;

  query: string;
  queryterm: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.query = params['query'];
      this.queryterm = params['queryterm'];
    });
  }

}
