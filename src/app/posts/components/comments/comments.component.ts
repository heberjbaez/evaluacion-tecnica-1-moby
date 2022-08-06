import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Comments } from 'src/app/interfaces/comments.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styles: [
    `
      .buttons-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .btn {
        margin: 0 5px;
      }
    `,
  ],
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

  change() {
    this.upperLower = !this.upperLower;
  }
}
