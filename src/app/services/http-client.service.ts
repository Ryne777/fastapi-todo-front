import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from '../interfaces/todos';




@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  url = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.url)
    // return this.http.get(this.url).pipe(map((data: Todos[]) => {
    //   let TodoList = data
    //   return TodoList.map(function (todo: any) {
    //     return {
    //       name: todo.name,
    //       description: todo.description,
    //       id: todo.id,
    //       author_id: todo.author_id
    //     }
    //   })
    // }))
  }
}
