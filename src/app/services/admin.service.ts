import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ItemForm } from '../forms/ItemForm';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AdminService {

  public url = 'http://localhost:3000/items';

  constructor(private httpClient: HttpClient) { }

  public sendItemToServer(item: ItemForm): Observable<any> {
    return this.httpClient.post(this.url, item);
  }

}
