import { Component, OnInit } from '@angular/core';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { PostsService } from '../../posts/posts.service';


@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.scss']
})
export class BbComponent implements OnInit {
  bb: any[];
  constructor( private postsService: PostsService) { }

  ngOnInit() {
  	this.getB1BPosts('b1t0v11bajt0v1', '12');
  }

    getB1BPosts(post_type: string, numberOfPosts: string) {
    this.postsService
      .mainGetRequest(post_type, "", numberOfPosts, '0', 1)
      .subscribe( result => {
        this.bb = result;
      })
  }

}
