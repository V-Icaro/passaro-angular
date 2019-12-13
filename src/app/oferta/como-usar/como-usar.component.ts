import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = ''

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
    ) { }

  ngOnInit() {
    //acessando parametro da rota pai
    this.ofertaService.getComoUsarId(this.route.parent.snapshot.params['id'])
      .then((resposta: any) => {
          this.comoUsar = resposta
      })
  }

}
