import { Component, OnInit } from '@angular/core';
import { Welcome } from 'src/app/interfaces/posts.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  resultList: any = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.postsService.getPosts().subscribe({
      next: (resultList) => {
        this.resultList = resultList;
        console.log(resultList);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
