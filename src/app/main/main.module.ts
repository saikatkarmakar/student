import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent, MainComponent]
})
export class MainModule { }
