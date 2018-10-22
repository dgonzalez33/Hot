import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'list', loadChildren: './list/list.module#ListPageModule'},
  { path: 'create',loadChildren: './create/create.module#CreatePageModule'},
  { path: 'view-tools', loadChildren: './view-tools/view-tools.module#ViewToolsPageModule' },
  { path: 'tool', loadChildren: './tool/tool.module#ToolPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
