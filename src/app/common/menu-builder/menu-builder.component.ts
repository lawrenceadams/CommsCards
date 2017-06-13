import { Component, OnInit, Input } from '@angular/core';
import { MenuOption } from "../../card-selector/menuOption.model";

@Component({
  selector: 'app-menu-builder',
  templateUrl: './menu-builder.component.html',
  styleUrls: ['./menu-builder.component.css']
})
export class MenuBuilderComponent implements OnInit {
  @Input() menuInputObject: MenuOption;

  constructor() { }

  ngOnInit() {
  }

}
