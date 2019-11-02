import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../posts/posts.service';
import { ActivatedRoute, Params } from '@angular/router';

import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.scss']
})
export class PretragaComponent implements OnInit {
  searchItem: string;
  post_type: string;
  blogSearchResult: any[];
  premotavanjeSearchResult: any[];
  bbSearchResult: any[];

  /*
  copied from 'tags' component, look for better way 
  */
  /* variables used in pagination */
  total_number_of_posts_bb : number;
  total_number_of_posts_premotavanje : number;
  total_number_of_posts_blog : number;
  currentPage: number = 1;

  /* after clicking on pagination of certain post type, show only results for that post type */
  showBlog : boolean;
  showBB : boolean;
  showPremotavanje : boolean;
  /* end of copying */


  constructor( private postsService: PostsService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.searchItem = this.route.snapshot.params['searchItem'];

    this.showBB = true;
    this.showBlog = true;
    this.showPremotavanje = true;

    // this.getSearchInput('blog/pretraga', this.searchItem);
    // this.getSearchInput('premotavanje/pretraga', this.searchItem);
    // this.getSearchInput('b1t0v11bajt0v1/pretraga', this.searchItem);

    /* after url change on the this same component */
    this.route.params.subscribe(
    	( params: Params )=> {

    		if ( params['searchItem'] ) this.searchItem = this.route.snapshot.params['searchItem'];
        if ( params['post_type'] ) this.post_type = this.route.snapshot.params['post_type']

    		if ( this.post_type ) {
           if ( this.post_type == "b1t0v11bajt0v1") {
               this.getSearchInput('b1t0v11bajt0v1/pretraga', this.searchItem);  
              this.showPremotavanje = false;
              this.showBlog = false;
              this.showBB = true;
            }
            if ( this.post_type == "blog") {
              this.getSearchInput('blog/pretraga', this.searchItem);
              this.showBB = false;
              this.showPremotavanje = false;
              this.showBlog = true;
            }
            if ( this.post_type == "premotavanje") {
              this.getSearchInput('premotavanje/pretraga', this.searchItem);
              this.showBB = false;
              this.showBlog = false;
              this.showPremotavanje = true;
            }  
        } else {
          this.getSearchInput('blog/pretraga', this.searchItem);
          this.getSearchInput('premotavanje/pretraga', this.searchItem);
          this.getSearchInput('b1t0v11bajt0v1/pretraga', this.searchItem);  
        }
        
    	})
    
  }

  getSearchInput(cpt, searchItem ) {
  	//CHECK IF THIS IS A GOOD SOLUTION
      return this.postsService.mainGetRequest(cpt, searchItem, '10', '1', "")
        .subscribe( result => {
          // console.log( result )
            if ( cpt == 'blog/pretraga') this.blogSearchResult = result;
            if ( cpt == 'premotavanje/pretraga') this.premotavanjeSearchResult = result;
            if ( cpt == 'b1t0v11bajt0v1/pretraga') this.bbSearchResult = result;  

            // console.log('result')
            // console.log( this.blogSearchResult)
            if ( result.length > 0 ) {
              if ( result[0].type == 'b1t0v11bajt0v1' ) {
                // this.bbTags = result;
                this.bbSearchResult = result
                this.total_number_of_posts_bb = result[0].number_of_posts;
              } else if ( result[0].type == 'blog' ) {

                  this.blogSearchResult = result;
                  // this.total_number_of_posts_blog = result[0].number_of_posts;
              } else if ( result[0].type == 'premotavanje' ) {
                  // this.premotavanjeTags = result;
                  this.total_number_of_posts_premotavanje = result[0].number_of_posts;
              } 
              console.log( result[0].number_of_posts  + " postovi")
          } 
        }) 

  	


  
  }

}
