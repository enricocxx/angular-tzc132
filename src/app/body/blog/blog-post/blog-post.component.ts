import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {SidebarComponent } from '../../sidebar/sidebar.component'
import { PostsService } from '../../../posts/posts.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  post: any[];
  post_slug: string;
  constructor( private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getPost('blog', this.route.snapshot.params['post_slug'] );
  }

  getPost(cpt, post_slug) {
  	this.postsService
  	  .getPost( cpt, post_slug)
  	    .subscribe( result => {
  	    	console.log( result);
  	    	this.post = result;
  	    })
  }


}
