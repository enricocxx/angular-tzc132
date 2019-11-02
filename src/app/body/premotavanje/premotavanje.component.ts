import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../posts/posts.service';

@Component({
  selector: 'app-premotavanje',
  templateUrl: './premotavanje.component.html',
  styleUrls: ['./premotavanje.component.scss']
})
export class PremotavanjeComponent implements OnInit {
  review: any[];
  constructor( private postsService : PostsService ) { }

  ngOnInit() {
  	this.getReviewPosts('premotavanje', 12);
  }

  getReviewPosts(post_type, numberOfPosts) {
    this.postsService
      .mainGetRequest(post_type, "", numberOfPosts, '1',"")
      .subscribe( result => {
        console.log( result );
        this.review = result;
      })
  }

}
