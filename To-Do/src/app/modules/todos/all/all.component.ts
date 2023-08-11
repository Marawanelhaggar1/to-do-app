import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from 'src/app/core/model/todos';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent {
  displayedColumns: string[] = ['id', 'task', 'completed', 'actions'];
  @Input() todoList!: Todos[];
  @Output() idDeleteEmitter = new EventEmitter();
  @Output() idEditEmitter = new EventEmitter();
  @Output() idStatusEmitter = new EventEmitter();

  constructor() {}

  delete(id: number) {
    this.idDeleteEmitter.emit(id);
  }

  edit(id: number) {
    this.idEditEmitter.emit(id);
  }

  changeStatus(id: number) {
    this.idStatusEmitter.emit(id);
  }
}
