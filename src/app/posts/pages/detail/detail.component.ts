import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Posts } from 'src/app/interfaces/posts.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
    `
      .heading-container {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export class DetailComponent implements OnInit {
  post!: Posts;
  lastComment = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.viewDetails();
  }

  viewDetails() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.postsService.getPostDetail(id)))
      .subscribe((post) => {
        this.post = post;
      });
  }

  viewLastComment(data: string) {
    this.lastComment = data;
  }
}
