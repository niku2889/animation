import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDataComponent } from './pages/table-data/table-data.component';
import { DemoComponent } from './pages/demo/demo.component';

const routes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'data', component: TableDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
