import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PackagesPage} from './packages.page';
import {PipesModule} from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: PackagesPage
  }
];

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PackagesPage]
})
export class PackagesPageModule {
}
