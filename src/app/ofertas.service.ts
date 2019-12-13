import { Oferta } from './shared/oferta.model'
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

import { URL_API } from './app.api'

@Injectable()
export class OfertasService {

    private url_api = URL_API

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        // efetuuar requisição http
        return this.http.get(`${this.url_api}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertasCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${this.url_api}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertasId(id: number): Promise<Oferta> {
        return this.http.get(`${this.url_api}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                 return resposta[0]
            })
    }

    public getComoUsarId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0].descricao
        })
    }

    public getOndeFicaId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0].descricao
        })
    }
}

