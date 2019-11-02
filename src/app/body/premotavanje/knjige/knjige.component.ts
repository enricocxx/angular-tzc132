import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SidebarComponent } from '../../sidebar/sidebar.component';
import { PostsService } from '../../../posts/posts.service';

@Component({
  selector: 'app-knjige',
  templateUrl: './knjige.component.html',
  styleUrls: ['./knjige.component.scss']
})
export class KnjigeComponent implements OnInit {
  post: any[];
  
  total_number_of_posts 
  currentPage: number = 1;

  id: number;
  constructor( private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log( this.route.snapshot.params['cat_name'] )
    // this.getCategory();
    this.getBookPosts('premotavanje/knjige', 190, 10, 1, ""); //190 => knjige category id
  }

  getBookPosts(post_type, tagID, numberOfPosts, page_no, category) {
    this.postsService.mainGetRequest(post_type, tagID, numberOfPosts, page_no, category)
      .subscribe( result => {
        this.total_number_of_posts = result[0].number_of_posts.publish;
        this.post = result;  
        console.log( result );  
      })
  }
 

}