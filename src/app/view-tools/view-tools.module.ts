import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from './../header/header.module'
import { ViewToolsPage } from './view-tools.page';

const routes: Routes = [
  {
    path: '',
    component: ViewToolsPage
  },
  {
    path: ':category',
    component: ViewToolsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewToolsPage]
})
export class ViewToolsPageModule {}
