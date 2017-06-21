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
    new MenuOption("Principles<span class='icon is-pulled-right'><i class='med-icon m-princ'></i></span>", "/study/system/princ"),
    new MenuOption("Respiratory<span class='icon is-pulled-right'><i class='med-icon m-resp'></i></span>", "/study/system/resp"),
    new MenuOption("Cardiovascular<span class='icon is-pulled-right'><i class='med-icon m-cardio'></i></span>", "/study/system/cardio"),
    new MenuOption("Gastrointestinal<span class='icon is-pulled-right'><i class='med-icon m-gi'></i></span>", "/study/system/gi"),
    new MenuOption("Dermatology<span class='icon is-pulled-right'><i class='med-icon m-derm'></i></span>", "/study/system/derm"),
    new MenuOption("Endocrine<span class='icon is-pulled-right'><i class='med-icon m-endo'></i></span>", "/study/system/endo"),
    new MenuOption("Child and Family<span class='icon is-pulled-right'><i class='med-icon m-paeds'></i></span>", "/study/system/paeds"),
    new MenuOption("Ophthalmology<span class='icon is-pulled-right'><i class='med-icon m-ophthal'></i></span>", "/study/system/ophthal"),
    new MenuOption("ENT<span class='icon is-pulled-right'><i class='med-icon m-ent'></i></span>", "/study/system/ent"),
    new MenuOption("Renal<span class='icon is-pulled-right'><i class='med-icon m-renal'></i></span>", "/study/system/renal"),
    new MenuOption("Urology<span class='icon is-pulled-right'><i class='med-icon m-urol'></i></span>", "/study/system/urol"),
    new MenuOption("Ageing<span class='icon is-pulled-right'><i class='med-icon m-age'></i></span>", "/study/system/age"),
    new MenuOption("Neurology<span class='icon is-pulled-right'><i class='med-icon m-neuro'></i></span>", "/study/system/neuro"),
    new MenuOption("Psychiatry<span class='icon is-pulled-right'><i class='med-icon m-psych'></i></span>", "/study/system/psych"),
    new MenuOption("Obstetrics &amp; Gynaecology<span class='icon is-pulled-right'><i class='med-icon m-obgyn'></i></span>", "/study/system/obgyn"),
    new MenuOption("Haematology<span class='icon is-pulled-right'><i class='med-icon m-haem'></i></span>", "/study/system/haem"),
    new MenuOption("Microbiology<span class='icon is-pulled-right'><i class='med-icon m-microbio'></i></span>", "/study/system/microbio"),
    new MenuOption("Pharmacology<span class='icon is-pulled-right'><i class='med-icon m-pharma'></i></span>", "/study/system/pharma"),
    new MenuOption("Ethics and Law<span class='icon is-pulled-right'><i class='med-icon m-ethlaw'></i></span>", "/study/system/ethlaw"),
    new MenuOption("General Practice<span class='icon is-pulled-right'><i class='med-icon m-gp'></i></span>", "/study/system/gp"),
    new MenuOption("Public Health<span class='icon is-pulled-right'><i class='med-icon m-pubhealth'></i></span>", "/study/system/pubhealth"),
    new MenuOption("Radiology<span class='icon is-pulled-right'><i class='med-icon m-radiol'></i></span>", "/study/system/radiol")
  ]

  constructor() { }

  ngOnInit() {
  }

}
