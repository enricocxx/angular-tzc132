import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../../../posts/posts.service';



@Component({
  selector: 'app-bb-post',
  templateUrl: './bb-post.component.html',
  styleUrls: ['./bb-post.component.scss']
})
export class BbPostComponent implements OnInit {
  post: any[];
  post_slug: string;

  constructor( private postsService: PostsService, private route: ActivatedRoute ) { }

  ngOnInit() {
    console.log( this.route.snapshot.params['post_slug'] );
  	this.getPost('b1t0v11bajt0v1', this.route.snapshot.params['post_slug']);

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
