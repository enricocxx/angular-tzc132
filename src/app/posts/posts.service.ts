import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
//import 'rxjs/Rx';
import { map } from 'rxjs/operators';

//import 'rxjs/add/operator/map';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})

/*
!!!!! BETTER ORGANIZE FUNCTIONS BELOW, THEY BECAME SPAGHETI
*/



export class PostsService {
  
  private postsUrl = "http://localhost/svetUcenja/wordpress/testing/wp-json/wp/v2/";
  private categoriesUrl = "http://localhost/svetUcenja/wordpress/testing/wp-json/wp/v2/categories";

  constructor( private httpClient: HttpClient ) {
  }


  /* frontpage http request */
  getIntroPostByTag(tagID: number){
    return this.httpClient
      .get<[]>( this.postsUrl + 'posts?tags='+tagID)
      
  }
  /* create get requests for different post types */
  mainGetRequest( post_type : string ="", tagID="", numberOfPosts='12', page_no='1', category ): Observable<any[]> { 
    switch(post_type) {
      case "posts":
        return this.httpClient
          .get<[]>( this.postsUrl + post_type);
          break;
      case "b1t0v11bajt0v1":
         return this.httpClient
          .get<any[]>( this.postsUrl + post_type, {
            params: {
              per_page: numberOfPosts,
              _embed: "",
              order: 'asc'
            }
          });
          break;
      case "premotavanje":
        return this.httpClient
          .get<any[]>( this.postsUrl + post_type + "?_embed" , {
            params: {
              kategorije: tagID,
              per_page: numberOfPosts,
              page: page_no
            }
          });
          break;
      case "blog":
        return this.httpClient
          .get<any[]>( this.postsUrl + post_type +'?page=' + page_no + '&type='+post_type, {
            params: {
              per_page: numberOfPosts   
            }
          });
          break;
      case "premotavanje/tagovi":
        return this.httpClient
          .get<any[]>( this.postsUrl + "premotavanje", {
            params: {
              'tags': tagID,
              per_page: numberOfPosts,
              page: page_no ? page_no : '0', //??????
              type: post_type
            }
          });
          break;
      case "premotavanje/knjige":
        return this.httpClient
          .get<any[]>( this.postsUrl + "premotavanje", {
            params: {
              kategorije: tagID,
              per_page: numberOfPosts,
              page: page_no ? page_no : '0', //??????
            }
          });
          break;
      case "premotavanje/muzika":
        return this.httpClient
          .get<any[]>( this.postsUrl + "premotavanje", {
            params: {
              kategorije: tagID,
              per_page: numberOfPosts,
              page: page_no ? page_no : '0', //??????
              type: "premotavanje"
            }
          });
          break;
      case "b1t0v11bajt0v1/tagovi":
        return this.httpClient
            .get<any[]>( this.postsUrl + "b1t0v11bajt0v1", {
              params: {
                'tags': tagID,
                per_page: numberOfPosts,
                page: page_no ? page_no : '0',
                type: post_type
              }
            });
        break;
      case "blog/tagovi":
        return this.httpClient
            .get<any[]>( this.postsUrl + "blog", {
              params: {
                tags: tagID,
                per_page: numberOfPosts,
                page: page_no ? page_no : '0',
                type: post_type
              }
            });
        break;
      case "premotavanje/pretraga":
        return this.httpClient
            .get<any[]>( this.postsUrl + 'premotavanje', {
              params: {
                search: tagID
              }
            });
        break;
      case "blog/pretraga":
        return this.httpClient
            .get<any[]>( this.postsUrl + 'blog', {
              params: {
                search: tagID,
                type: 'search_blog'
              }
            });
        break;
      case "b1t0v11bajt0v1/pretraga":
        return this.httpClient
            .get<any[]>( this.postsUrl + 'b1t0v11bajt0v1', {
              params: {
                search: tagID
              }
            });
        break;
      case "":
          break;
        //do nothing
    }
    
  }
  /*  */
  listTags( cpt:string, tagID: string, numberOfPosts: number ): Observable<any[]> { 
    return this.httpClient
      .get<any[]>( this.postsUrl + cpt, {
        params: {
          'tags': tagID
        }
      })
  }


  /* send request for individual post, 'bb', 'premotavanje', 'blog'*/
  getPost(cpt, post_slug): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.postsUrl + cpt, {
        params: {
          slug: post_slug
        }
      });
  }

  getCategory(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.categoriesUrl );
  }

  getPostsByCategory(cpt, cat_id): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.postsUrl + cpt, {
        params: {
          categories: cat_id
        }
      });
  }

  getSearchInput( cpt, searchItem ) : Observable<any[]> {
    return this.httpClient
      .get<any[]>( this.postsUrl + cpt, {
        params: {
          search: searchItem
        }
      });
  }

  //get citation from database
  getCitation() {
    return this.httpClient
      .get<any[]>( this.postsUrl + 'citati')
  }

}
