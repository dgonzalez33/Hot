import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard]},
  { path: 'list', loadChildren: './list/list.module#ListPageModule'},
  { path: 'create', loadChildren: './create/create.module#CreatePageModule', canActivate: [AuthGuard]},
  { path: 'view-tools', loadChildren: './view-tools/view-tools.module#ViewToolsPageModule', canActivate: [AuthGuard] },
  { path: 'tool', loadChildren: './tool/tool.module#ToolPageModule', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule', canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
