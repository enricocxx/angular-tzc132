import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SidebarComponent } from '../../sidebar/sidebar.component';
import { PostsService } from '../../../posts/posts.service';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-muzika',
  templateUrl: './muzika.component.html',
  styleUrls: ['./muzika.component.scss']
})
export class MuzikaComponent implements OnInit {

  httpResponse: any[];
  post_type = "premotavanje/muzika";
  currentPage: number = 1;

  id: number;
  constructor( private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMusicPosts('premotavanje/muzika', 191, 10, 1, ""); // 7 => music category id

    /*pagination blog load, listen to changes in url*/
    this.route.params.subscribe( ( params: Params ) => {
        if ( params['pageID'] ) this.currentPage = params['pageID'];      
        this.getMusicPosts('premotavanje/muzika', 191, 10, this.currentPage, ""); // 7 => music category id
    } );
  }



   getMusicPosts(post_type, tagID, numberOfPosts, page_no, category) {
    this.postsService.mainGetRequest(post_type, tagID, numberOfPosts, page_no, category)
      .subscribe( result => {
        this.httpResponse = result;  
      })
  }

}
