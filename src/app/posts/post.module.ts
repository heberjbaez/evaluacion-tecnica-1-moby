import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './pages/list/list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CommentsComponent } from './pages/detail/components/comments/comments.component';
import { DetailComponent } from './pages/detail/details/detail.component';

import { UpperLowerPipe } from './pipes/upper-lower.pipe';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListComponent,
    NotFoundComponent,
    UpperLowerPipe,
    DetailComponent,
    CommentsComponent,
  ],

  imports: [CommonModule, RouterModule],
  exports: [],
})
export class PostModule {}
