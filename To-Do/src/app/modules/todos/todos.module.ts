import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { AllComponent } from './all/all.component';
import { AddEditDeleteComponent } from './add-edit-delete/add-edit-delete.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, TodosRoutingModule],
})
export class TodosModule {}
