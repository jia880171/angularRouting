import { TodoListModule } from './todo-list/todo-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Module
// use lazy load
// import { FeatureModule } from './feature/feature.module';

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

import{FormsModule} from '@angular/forms'
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    LayoutComponent,


    // TodoListComponent,//不能引入
  ],
  imports: [
    BrowserModule,

    // FeatureModule,
    // use lazy load

    TodoListModule,

    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, TodoListComponent]//必須引入
})
export class AppModule { }
