import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTreeModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTreeModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class WidgetModule { }
