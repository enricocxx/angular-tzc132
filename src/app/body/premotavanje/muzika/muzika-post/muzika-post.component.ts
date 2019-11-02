import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../../posts/posts.service';

@Component({
  selector: 'app-muzika-post',
  templateUrl: './muzika-post.component.html',
  styleUrls: ['./muzika-post.component.scss']
})
export class MuzikaPostComponent implements OnInit {

  post: any[];
  post_slug: string;
  constructor( private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
  	console.log( this.route.snapshot.params['post_slug'] )
  	this.getPost('premotavanje', this.route.snapshot.params['post_slug'] );
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