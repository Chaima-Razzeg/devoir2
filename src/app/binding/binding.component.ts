import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  titre: string ="Apprendre le DataBinding dans Angular 10";

  status : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  changerTitre(){
    this.titre ="Mon nouveau titre";
  }
  nom : string ="nadhem bel hadj";

}
