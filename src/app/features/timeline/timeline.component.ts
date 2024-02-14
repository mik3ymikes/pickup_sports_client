import { Component } from '@angular/core';
import { Post } from '../../shared/models/post';
import { PostComponent } from '../../shared/components/posts/post/post.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  posts: Post[]=[
    new Post({
      id: 1,
      title: "post 1",
      content: "content 1",
      created_at: "2021-01-01",
      user:{
        first_name:"John",
        last_name:"Doe",
        email: "email@email.com",
        username: "john123"
      }
    }),
    new Post({
      id: 1,
      title: "post 1",
      content: "content 1",
      created_at: "2021-01-01",
      user:{
        first_name:"John",
        last_name:"Doe",
        email: "email@email.com",
        username: "john123"
      }
    }),
    new Post({
      id: 1,
      title: "post 1",
      content: "content 1",
      created_at: "2021-01-01",
      user:{
        first_name:"John",
        last_name:"Doe",
        email: "email@email.com",
        username: "john123"
      }
    })
  ]


  constructor() {}

}
