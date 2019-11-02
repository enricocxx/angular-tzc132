import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PostsService } from '../../posts/posts.service';
import { CitationService } from '../../services/citation.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  introLog: any[];

  constructor( private postsService: PostsService, private citation: CitationService ) { }

  ngOnInit() {
  	this.getIntroPostByTag(83);
      console.log( document.body.scrollHeight ) // ???
    }


  getIntroPostByTag( tagID: number ) {
  	this.postsService.getIntroPostByTag( tagID )
  	  .subscribe( result => {
  	  	this.introLog = result;
  	  })
  } 

 
  
}
