import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from './../header/header.module'
import { ToolPage } from './tool.page';

const routes: Routes = [
  {
    path: ':toolId',
    component: ToolPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToolPage]
})
export class ToolPageModule {}
