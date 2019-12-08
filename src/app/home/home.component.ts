import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //forma correta de injetar serviços no componente
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  //instanciando serviço no construtor
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    console.log(this.ofertasService.getOfertas())
  }

}
