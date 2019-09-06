import { Component, OnInit, Inject } from '@angular/core';

import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  public userName: string;

  constructor(
    @Inject(SESSION_STORAGE)
    private webStorageService: WebStorageService
  ) { }

  ngOnInit(): void {
    this.userName = this.getDataFromSession('username');
  }

  public getDataFromSession(key: string): string {
    return this.webStorageService.get(key);
  }

}
