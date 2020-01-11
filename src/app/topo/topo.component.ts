import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Observable, Subject } from 'rxjs'
import { Oferta } from '../shared/oferta.model'

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public ofertas2: Oferta[]
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
     .debounceTime(1000) //executa apos 1 segundo
     .distinctUntilChanged() //não executa metodo se pesquisa for identica a anterior
     .switchMap((busca: string) => {
      console.log('requisição http: ' , busca)
      if(busca.trim() === ''){
        //retorna um observable de array vazio
        return Observable.of<Oferta[]>([])
      }
        return this.ofertasService.pesquisaOfertas(busca)
     })
     .catch((err: any) => {
       console.log(err)
       return Observable.of<Oferta[]>([])
     })

    this.ofertas.subscribe((ofertas: Oferta[]) => {
      this.ofertas2 = ofertas
    })
  }

  public pesquisa(busca: string): void {
    console.log('keyup caractere: ' , busca)
    this.subjectPesquisa.next(busca)
   }

}
