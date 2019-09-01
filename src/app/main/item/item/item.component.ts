import { Component, OnInit, Inject } from '@angular/core';

import { Observable } from 'rxjs';
import { ItemForm } from '../../../forms/ItemForm';

import { MainService } from '../../service/main.service';
import { BasketService } from './../../../header/service/basket.service';
import { NotificationService } from '../../../header/service/notification.service'
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {

  public images$: Observable<ItemForm[]>;
  public data: any = {};
  public items: ItemForm[] = [];
  public filterValue: string;

  constructor(
    private mainService: MainService,
    private basketService: BasketService,
    private notificationService: NotificationService,
    private router: Router,
    @Inject(SESSION_STORAGE)
    private webStorageService: WebStorageService
  ) { }

  public setReserved(item: ItemForm): object {
    const isReserved = {
      'is-reserved': item.booked
    };

    return isReserved;
  }

  ngOnInit(): void {
    this.images$ = this.mainService.getItemsFromBackEnd();
  }

  public notify(item: ItemForm): void {
    if (this.router.url === '/main') {
      this.notificationService.onSuccess('Please sign in first.');
    } else if (this.router.url === '/user') {
      this.data.chosenItem = item.uuid;
      this.data.currentUser = this.webStorageService.get('userUuId');

      const basket = this.webStorageService.get('basket');
      basket.push(item);
      this.webStorageService.set('basket', basket);

      this.basketService
        .reserveItem(this.data)
        .subscribe(response => {
          if (response.message === 'Success') {
            item.booked = !item.booked;
            if (item.booked) {
              item.userUuId = this.webStorageService.get('userUuId');
              this.notificationService.onSuccess('Added to basket.');
            } else {
              item.userUuId = '';

              const session = this.webStorageService.get('basket');
              const filteredUUID = session.filter(item => item.uuid !== item.uuid);
              this.webStorageService.set('basket', filteredUUID);
              this.notificationService.onSuccess('Removed from basket.');
            }
          }
        });
    }
  }

  public onSelect(event: { target: { value: string; }; }): void {
    this.filterValue = event.target.value;
  }

  public filterItem(item: ItemForm): boolean {
    if (this.filterValue === undefined || this.filterValue === 'Any') {
      return true;
    }

    for (const property in item) {
      if (item.hasOwnProperty(property)) {
        if (item[property] === this.filterValue) {
          return true;
        }
      }
    }

    return false;
  }

}
