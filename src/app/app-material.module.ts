import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  exports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
  ]
})
export class AppMaterialModule { }
