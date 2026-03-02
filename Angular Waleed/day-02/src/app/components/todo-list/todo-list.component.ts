import { Component, inject } from '@angular/core';
import { ToDoService } from '../../services/to-do-service.service';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  private todos = inject(ToDoService);
  get todoList() {
    return this.todos.todoList;
  }
}
