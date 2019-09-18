import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyworkComponent } from './mywork/mywork.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  {path: 'mywork', component: MyworkComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})

export class PagesRoutingModule { }
