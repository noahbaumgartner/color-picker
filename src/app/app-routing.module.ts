import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickerComponent } from './picker/picker.component';

const routes: Routes = [
  { path: '', component: PickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
