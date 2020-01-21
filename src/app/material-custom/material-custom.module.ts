import { NgModule } from '@angular/core';
import {MatCardModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule, MatTabsModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';



@NgModule({
  imports: [
    MatCardModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    MatCardModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ]
})
export class MaterialCustomModule { }
