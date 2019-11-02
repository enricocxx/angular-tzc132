import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostsService } from '../../posts/posts.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  
  /* define wp rest api variables */
  posts;
  bb: any[];
  music: any[];
  blogFront: any[];
  entryPost: any[];
  /* end of wp rest api variables */
  
  /* Review section variables*/
  hide: boolean = false;
  opacity: string = '';
  selectedMusicPost : string = "";
  reviewImage: string = "";
  reviewTitle: string = "";
  reviewID: string = "";
  reviewExcerpt : string = "";
  /* end of Review section variables */

  constructor( private postsService: PostsService ) { }

  ngOnInit() {
    this.displayFrontpageContent("posts", "", '1', 0, "");
    this.getIntroPostByTag();
    this.displayFrontpageContent("b1t0v11bajt0v1", "", '3', 0, "");
    this.displayFrontpageContent('premotavanje', '', '8', 0, "");
    this.displayFrontpageContent('blog', "", 3, 1, "");
    console.log( document.body.scrollHeight )
  }

  onHoverShowMusicData(post) {
    /* data to be sent to the right div container*/
    this.reviewImage = post.featured_image_src;
    this.reviewTitle = post.title.rendered;
    this.reviewID = post.id;
    this.reviewExcerpt = post.excerpt.rendered;
  }

  onLeaveMusicImage() {
    this.selectedMusicPost = "";
  }

  getIntroPostByTag() {
    this.postsService
      .getIntroPostByTag(83)
      .subscribe( result => {
        this.entryPost = result;
      })
  }


  displayFrontpageContent(post_type, tagID, numberOfPosts, page_no, category) {
    this.postsService
      .mainGetRequest(post_type, "190, 191", numberOfPosts, '1', "") // 7 & 99 are categories for "Premotavanje" section
      .subscribe( result => {
          
        if ( post_type == "b1t0v11bajt0v1") this.bb = result;
        if ( post_type == "premotavanje") this.music = result;
        if ( post_type == "blog") this.blogFront = result;
        // console.log( this.music[0].kategorije )
        console.log( result )
      })
  }

}
 