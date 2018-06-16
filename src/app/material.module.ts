import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [MatButtonModule,MatTabsModule,MatSidenavModule,MatInputModule,MatDividerModule],
  exports: [MatButtonModule,MatTabsModule,MatSidenavModule,MatInputModule,MatDividerModule]
})
export class MaterialModule { }