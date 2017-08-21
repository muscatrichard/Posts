import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsApiService } from './services/posts-api.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [PostsApiService]
})
export class SharedModule { }
