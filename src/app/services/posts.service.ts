import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Welcome } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  @Output() dispatchEmmit: EventEmitter<any> = new EventEmitter();

  private apiUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Welcome> {
    const url = `${this.apiUrl}/posts`;
    return this.http.get<Welcome>(url);
  }

  getPostDetail(id: string): Observable<Welcome> {
    const url = `${this.apiUrl}/posts/${id}`;
    return this.http.get<Welcome>(url);
  }

  getPostComments(postId: number): Observable<Welcome> {
    const url = `${this.apiUrl}/comments?postId=${postId}`;
    return this.http.get<Welcome>(url);
  }
}
