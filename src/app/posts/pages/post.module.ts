import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CommentsComponent } from '../components/comments/comments.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { UpperLowerPipe } from 'src/app/pipes/upper-lower.pipe';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CommentsComponent,
    DetailComponent,
    ListComponent,
    NotFoundComponent,
    UpperLowerPipe,
  ],
  exports: [
    ListComponent,
    DetailComponent,
    CommentsComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class PostModule {}
