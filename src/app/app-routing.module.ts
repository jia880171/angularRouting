import { TodoListComponent } from './todo-list/todo-list.component';
import { EnsureLoginGuard } from './login/ensure-login.guard';
import { LayoutGuard } from './layout/layout.guard';
import { FeatureModule } from './feature/feature.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanDeactivate } from '@angular/router';
import { PreloadAllModules } from '@angular/router'


const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    canActivate: [LayoutGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },{
        path: 'home',
        component: HomeComponent
      },{
        path: 'about',
        component: AboutComponent
      },
    ]
  },{
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(mod => mod.FeatureModule)
  },{
    path: 'todo-list',
    // component: TodoListComponent
    loadChildren: () => import('./todo-list/todo-list.module').then(mod => mod.TodoListModule)
  },{
    path: 'login',
    component: LoginComponent,
    canDeactivate: [EnsureLoginGuard],
  },{
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true,
    preloadingStrategy: PreloadAllModules
    //preload the lazy loading module at background

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
