import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CommentsComponent } from '../components/comments/comments.component';

import { UpperLowerPipe } from '../pipes/upper-lower.pipe';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    CommentsComponent,
    UpperLowerPipe,
  ],
  exports: [ListComponent, DetailComponent, CommentsComponent],
  imports: [CommonModule, RouterModule],
})
export class ApiModuleModule {}
