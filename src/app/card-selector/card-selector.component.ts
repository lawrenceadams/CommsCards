import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.css']
})
export class CardSelectorComponent implements OnInit {

  menuOptions: string[] = [
    "Select by Year",
    "Select by System",
    "Select by Card Type",
    "Select by CCP"
  ]

  constructor() { }

  ngOnInit() {
  }

}
