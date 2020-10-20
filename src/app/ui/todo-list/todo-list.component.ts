import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/interfaces/todos';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: Todos[]

  constructor(private http: HttpClientService) { }

  ngOnInit(): void {
    this.http.getTodos().subscribe((data: Todos[]) => { this.todoList = data })
  }

}
