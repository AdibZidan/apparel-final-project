import { Component, OnInit, Inject } from '@angular/core';

import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  public username: string;

  constructor(
    @Inject(SESSION_STORAGE)
    private webStorageService: WebStorageService
  ) { }

  ngOnInit(): void {
    this.username = this.getDataFromSession('username');
  }

  public getDataFromSession(key: string): string {
    return this.webStorageService.get(key);
  }

}
