import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuOption } from "../card-selector/menuOption.model";
import { routeFadeStateTrigger } from "../common/route.animations";
import { CardProviderService } from "../common/services/card-provider.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routeFadeStateTrigger]
})
export class HomeComponent implements OnInit {

  @HostBinding('@routeFadeState') routeAnimation = true;

  mainMenuOptions: MenuOption[] = [
    new MenuOption(`About <span class="icon is-pulled-right"><i class="fa fa-info"></i></span>`, "/about"),
    new MenuOption(`Legal <span class="icon is-pulled-right"><i class="fa fa-gavel"></i></span>`, "/legal"),
    new MenuOption(`Useful links <span class="icon is-pulled-right"><i class="fa fa-link"></i></span>`, "/links"),
    new MenuOption(`Start Studying <span class="icon is-pulled-right"><i class="fa fa-stethoscope"></i></span>`, "/study/", "green")
  ]

  constructor(private service: CardProviderService) { }

  ngOnInit() {
    this.service.destroyCardQuery()
    console.log(this.service.getCardQuery());
  }

}
