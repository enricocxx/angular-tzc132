import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PaginationComponent } from '../../shared/components/pagination/pagination.component'; 
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PostsService } from '../../posts/posts.service';
// import { PaginationService } from '../../shared/services/pagination.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  httpResponse: any[];
  total_number_of_posts : number;
  currentPage: number = 1;
  post_type = "blog";
  
  constructor( private postsService: PostsService, 
               private route: ActivatedRoute ) { }

  ngOnInit() {
    /*pagination blog load, listen to changes in url*/
    this.route.params.subscribe( ( params: Params ) => {
        if ( params['pageID'] ) this.currentPage = params['pageID'];      
        this.getBlogPosts('blog', "", 10, this.currentPage, "");
        window.scrollTo(0, 0);

        /* tried to fix a bug for strange page heights */
        // function setWindowHeight(){
        //   var windowHeight = window.innerHeight;
        //   document.body.style.height = windowHeight + "px";
        //   console.log(document.body.style.height);
        // }
        // window.addEventListener("resize",setWindowHeight,false);


    } );

  }
  
  getBlogPosts(post_type, tagID, numberOfPosts, page_no, category) {
  	this.postsService.mainGetRequest(post_type, tagID, numberOfPosts, page_no, category)
  	  .subscribe( result => {
        this.total_number_of_posts = result[0].number_of_posts.publish;
  	  	this.httpResponse = result;
        // console.log( result ) 
  	  })
  }

} 
