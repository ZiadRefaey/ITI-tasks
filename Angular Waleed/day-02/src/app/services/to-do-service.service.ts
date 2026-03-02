import { Injectable } from '@angular/core';
import { TodoItem } from '../modules/todo';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private todoListArray: TodoItem[] = [
    { title: 'make one billion dollars', date: new Date(), isChecked: false },
    { title: 'Review TypeScript generics concepts', date: new Date(), isChecked: false },
    { title: 'Refactor navbar component', date: new Date(), isChecked: true },
    { title: 'Push latest changes to GitHub', date: new Date(), isChecked: false },
    { title: 'Practice flexbox layouts', date: new Date(), isChecked: true },
    { title: 'Prepare presentation about frontend frameworks', date: new Date(), isChecked: false },
    { title: 'Fix responsive issues on mobile view', date: new Date(), isChecked: false },
    { title: 'Implement dark mode toggle', date: new Date(), isChecked: false },
    { title: 'Read about Angular content projection', date: new Date(), isChecked: false },
    { title: 'Optimize app performance', date: new Date(), isChecked: true },
  ];
  get todoList(): TodoItem[] {
    return this.todoListArray;
  }
}
