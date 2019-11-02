import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../posts/posts.service';

@Component({
  selector: 'app-premotavanje-posts',
  templateUrl: './premotavanje-posts.component.html',
  styleUrls: ['./premotavanje-posts.component.scss']
})
export class PremotavanjePostsComponent implements OnInit {
  post: any[];
  post_slug: string;
  constructor( private postsService: PostsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	console.log( "test" + this.route.snapshot.params['post_slug'] )
  	this.getPost('premotavanje', this.route.snapshot.params['post_slug'] );
  }

  getPost(cpt, post_slug) {
  	this.postsService
  	  .getPost( cpt, post_slug)
  	    .subscribe( result => {
  	    	console.log( result); 
          if ( result.length == 0 ) this.router.navigate(['/it-is-the-wrong-em-boyo']); // if user type wrong address, based on premotavanje cpt, s/he will be redirected to 404 page
  	    	this.post = result;
  	    })
  }
}
