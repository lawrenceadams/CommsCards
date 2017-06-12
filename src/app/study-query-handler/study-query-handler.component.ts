import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-study-query-handler',
  templateUrl: './study-query-handler.component.html',
  styleUrls: ['./study-query-handler.component.css']
})
export class StudyQueryHandlerComponent implements OnInit {

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
