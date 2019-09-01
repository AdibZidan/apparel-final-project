import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ReserveForm } from 'src/app/forms/ReserveForm';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class BasketService {

  constructor(private httpClient: HttpClient) { }

  // getBasket(user: User): Observable<User> {
  //   const url: string = `http://localhost:8080/userbasket/${user.userUuId}`;
  //   return this.httpClient.get<User>(url);
  // }

  reserveItem(reserveForm: ReserveForm): Observable<any> {
    const itemsUrl = 'http://localhost:3000/items';

    return this.httpClient.put<any>(itemsUrl, reserveForm);
  }

  // toggleItem(item: ItemForm): Observable<ItemForm> {
  //   const url = `http://localhost:8080/catalogue/book/${item.id}`

  //   return this.httpClient.put<ItemForm>(url, item);
  // }

  // toggleCompleted(item: ItemForm): Observable<any> {
  //   const url = `http://localhost:3000/tasks/${item.id}`;

  //   return this.httpClient.put<ItemForm>(url, item);
  // }

}
