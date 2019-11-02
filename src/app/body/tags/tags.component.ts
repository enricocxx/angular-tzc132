import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PostsService } from '../../posts/posts.service';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  
  /* variables that recieves GET results */
  bbTags: any[];
  blogTags: any[];
  premotavanjeTags: any[];

  /* variables used in URL */
  tagID: string;
  tagName : string;
  post_type: string;

  /* variables used in pagination */
  total_number_of_posts_bb : number;
  total_number_of_posts_premotavanje : number;
  total_number_of_posts_blog : number;
  currentPage: number = 1;

  /* after clicking on pagination of certain post type, show only results for that post type */
  showBlog : boolean;
  showBB : boolean;
  showPremotavanje : boolean;



  constructor( private postsService: PostsService, 
               private route: ActivatedRoute ) { }
 
  ngOnInit() {
  	// this.tagName = this.route.snapshot.params['tag_name'];
  	this.tagID = this.route.snapshot.params['tag_id'];
  	// console.log( this.tagID );
  	// this.listTags('b1t0v11bajt0v1',this.tagID,12);
  	// this.listTags('blog',this.tagID,12);
    // this.listTags('premotavanje',this.tagID,12);
    this.showBB = true;
    this.showBlog = true;
    this.showPremotavanje = true;
    
     this.route.params.subscribe( ( params: Params ) => {
          if ( params['pageID'] ) this.currentPage = params['pageID'];
          if ( params['post_type'] ) this.post_type = params['post_type']; 
          
          /* show after click on pagination number */
          if ( this.post_type ) {
           
            this.listTags( this.post_type + '/tagovi', this.tagID, 10, this.currentPage, "");
           
            if ( this.post_type == "b1t0v11bajt0v1") {
              
              this.showPremotavanje = false;
              this.showBlog = false;
              this.showBB = true;
            }
            if ( this.post_type == "blog") {
              // this.listTags('blog/tagovi', this.tagID, 10, this.currentPage, "");
              this.showBB = false;
              this.showPremotavanje = false;
              this.showBlog = true;
            }
            if ( this.post_type == "premotavanje") {
              // this.listTags('premotavanje/tagovi', this.tagID, 10, this.currentPage, "");
              this.showBB = false;
              this.showBlog = false;
              this.showPremotavanje = true;
            }  
          /* show on page load */
          } else {
            this.listTags('b1t0v11bajt0v1/tagovi', this.tagID, 10, this.currentPage, "");
            this.listTags('blog/tagovi', this.tagID, 10, this.currentPage, "");
            this.listTags('premotavanje/tagovi', this.tagID, 10, this.currentPage, "");        
          }
          window.scrollTo(0, 0);
      });
  }
  
  listTags( post_type, tagID, numberOfPosts, page_no, category ) {
    this.postsService
      .mainGetRequest(post_type, tagID, numberOfPosts, page_no, category)
      .subscribe( result => {
      	if ( result.length > 0 ) {
            if ( result[0].type == 'b1t0v11bajt0v1' ) {
              this.bbTags = result;
            } else if ( result[0].type == 'blog' ) {
                this.blogTags = result;
            } else if ( result[0].type == 'premotavanje' ) {
                this.premotavanjeTags = result;
            } 
        } 
      })
  }  
}