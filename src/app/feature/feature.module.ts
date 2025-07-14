import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarFeatureComponent } from '../star-feature/star-feature.component';

@NgModule({
  declarations: [StarFeatureComponent],
  imports: [
    CommonModule,NgModule
  ], 
  exports: [
    StarFeatureComponent
  ]
})
export class FeatureModule { }
