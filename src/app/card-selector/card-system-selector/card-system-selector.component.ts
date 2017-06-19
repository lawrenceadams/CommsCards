import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuOption } from "../menuOption.model";
import { routeFadeStateTrigger } from "../../common/route.animations";

@Component({
  selector: 'app-card-system-selector',
  templateUrl: './card-system-selector.component.html',
  styleUrls: ['./card-system-selector.component.css'],
  animations: [routeFadeStateTrigger]
})
export class CardSystemSelectorComponent implements OnInit {

  @HostBinding('@routeFadeState') routeAnimation = true;

  systemOptions: MenuOption[] = [
    new MenuOption("Principles", "/study/system/principles"),
    new MenuOption("Respiratory", "/study/system/resp"),
    new MenuOption("Cardiovascular", "/study/system/cardio"),
    new MenuOption("Gastrointestinal", "/study/system/gi"),
    new MenuOption("Dermatology", "/study/system/derm"),
    new MenuOption("Muskuloskeletal", "/study/system/msk"),
    new MenuOption("Endocrine", "/study/system/endo"),
    new MenuOption("Child and Family", "/study/system/paeds"),
    new MenuOption("Ophthalmology", "/study/system/ophthal"),
    new MenuOption("ENT", "/study/system/ent"),
    new MenuOption("Renal", "/study/system/renal"),
    new MenuOption("Urology", "/study/system/urol"),
    new MenuOption("Ageing", "/study/system/age"),
    new MenuOption("Neurology", "/study/system/neuro"),
    new MenuOption("Psychiatry", "/study/system/psych"),
    new MenuOption("Obstetrics and Gynaecology", "/study/system/obgyn"),
    new MenuOption("Haematology", "/study/system/haem"),
    new MenuOption("Microbiology", "/study/system/microbio"),
    new MenuOption("Pharmacology", "/study/system/pharma"),
    new MenuOption("Ethics and Law", "/study/system/ethlaw"),
    new MenuOption("General Practice", "/study/system/gp"),
    new MenuOption("Public Health", "/study/system/pubhealth"),
    new MenuOption("Radiology", "/study/system/radiol")
  ]

  constructor() { }

  ngOnInit() {
  }

}
