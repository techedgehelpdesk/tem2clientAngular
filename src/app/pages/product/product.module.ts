import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatTabsModule } from '@angular/material/tabs';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CdkAccordionModule,
    MatTabsModule,
    IvyCarouselModule
  ]
})
export class ProductModule { }
