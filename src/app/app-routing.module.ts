import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaComponent } from './formula/formula.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'formula',
    component: FormulaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
