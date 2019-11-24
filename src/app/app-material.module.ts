import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule} from '@angular/material';

@NgModule({
    imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ]
})
export class AppMaterialModule { }
