import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //forma correta de injetar serviços no componente
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  //instanciando serviço no construtor
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //atribuindo ao ofertas um array de ofertas vindo do service
    //this.ofertas = this.ofertasService.getOfertas()
    //console.log(this.ofertas)

    //utilanzando PROMISES
    this.ofertasService.getOfertas2()
      .then(( ofertas: Oferta[]) => { 
        console.log('a função resolve() foi resolvida depois de 3 segundos')
        this.ofertas = ofertas 
      
      })
      //PROMISE REJECT
      .catch((param: any ) => { 
        console.log(param) 
      })
  }

}
