import { Component, OnInit } from '@angular/core';
import { MenuOption } from "../card-selector/menuOption.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mainMenuOptions: MenuOption[] = [
    new MenuOption(`About <i class="right floated info icon"></i>`, "/about"),
    new MenuOption(`Legal <i class="right floated law icon"></i>`, "/legal"),
    new MenuOption(`Start Studying <i class="right floated treatment icon"></i>`, "/studyby/", "green")
  ]

  constructor() { }

  ngOnInit() {
  }

}
