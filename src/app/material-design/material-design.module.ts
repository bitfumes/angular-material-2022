import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatButtonModule, MatCardModule, MatToolbarModule],
})
export class MaterialDesignModule {}
