import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ItemForm } from '../../forms/ItemForm';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class MainService {

  public url = 'http://localhost:3000/items';

  constructor(private httpClient: HttpClient) { }

  public getItemsFromBackEnd(): Observable<ItemForm[]> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });

    return this.httpClient
      .get<ItemForm[]>(this.url, { headers })
      .pipe(tap(() => console.log('Received images from the Back-End!')));
  }

}
