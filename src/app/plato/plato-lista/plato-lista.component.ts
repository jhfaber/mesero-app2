import { PlatoService } from './../../_service/plato.service';
import { Plato } from './../../_model/plato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plato-lista',
  templateUrl: './plato-lista.component.html',
  styleUrls: ['./plato-lista.component.css']
})
export class PlatoListaComponent implements OnInit {
  platos: Plato[];

  constructor(private platoService: PlatoService) { }

  ngOnInit() {
    this.platos = this.platoService.getPlatos();
  }

}
