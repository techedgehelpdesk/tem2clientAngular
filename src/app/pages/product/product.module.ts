import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatTabsModule } from '@angular/material/tabs';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ProductRoutingModule,
    CdkAccordionModule,
    MatTabsModule,
    IvyCarouselModule,
    MatInputModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class ProductModule { }
