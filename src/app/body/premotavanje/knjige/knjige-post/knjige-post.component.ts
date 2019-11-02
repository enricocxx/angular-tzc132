import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../../posts/posts.service';
import { SidebarComponent } from '../../../sidebar/sidebar.component';

@Component({
  selector: 'app-knjige-post',
  templateUrl: './knjige-post.component.html',
  styleUrls: ['./knjige-post.component.scss']
})
export class KnjigePostComponent implements OnInit {

  post: any[];
  post_slug: string;
  constructor( private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
  	console.log( this.route.snapshot.params['post_slug'] );
    console.log('test');
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