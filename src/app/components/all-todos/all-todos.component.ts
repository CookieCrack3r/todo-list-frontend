import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrl: './all-todos.component.scss'
})

export class AllTodosComponent implements OnInit {
  todos: any = [];
  error = '';
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    try {
      this.todos = await this.laodTodos();
    }catch(e){
      this.error = 'Fehler beim laden';
    }


  }

  laodTodos() {
    const url = environment.baseUrl + '/todos';
    let headers = new HttpHeaders();

    headers = headers.set('Authorization', 'Token ' + localStorage.getItem('token'));
    
    return lastValueFrom(this.http.get(url, {
      headers: headers
    }));
  }
}
