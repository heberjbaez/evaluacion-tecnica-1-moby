import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Posts } from 'src/app/interfaces/posts.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  post!: Posts;
  lastComment: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.postsService.getPostDetail(id)))
      .subscribe((post) => {
        this.post = post;
      });

    this.postsService.dispatchEmmit.subscribe((date) => {
      this.lastComment = date;
      console.log(this.lastComment);
    });
  }
}
