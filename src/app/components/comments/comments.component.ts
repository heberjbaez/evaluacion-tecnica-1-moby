import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Comments } from 'src/app/interfaces/comments.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
  @Input() post: number = 0;
  date: Date = new Date();
  upperLower: boolean = true;

  comments: Comments[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.emmitComments();
  }

  emmitComments() {
    this.postsService.getPostComments(this.post).subscribe({
      next: (comments) => {
        this.comments = comments;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  emmitDate() {
    this.postsService.dispatchEmmit.emit({
      date: this.date,
    });
  }

  change() {
    this.upperLower = !this.upperLower;
  }
}
