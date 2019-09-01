import { NgModule } from '@angular/core';

import { MainComponent } from './../main.component';
import { CatalogueComponent } from './../catalogue/catalogue/catalogue.component';
import { ItemComponent } from '../item/item/item.component';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent,
    CatalogueComponent,
    ItemComponent
  ],
  imports: [CommonModule],
  exports: [MainComponent]
})

export class MainModule { }
