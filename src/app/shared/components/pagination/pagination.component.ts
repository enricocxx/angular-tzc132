import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
	blogPagination: any[] = [];

	@Input() numberOfPosts: string; //obrisati u celoj aplikaciji, prvos
	@Input() activePage: string;
	@Input() post_type: string;
	@Input() searchItem: string;

	@Input() result: any[];
	total_number_of_posts: string;
	currentPage: number = 1;
	tagName : string;
	tagID: string;
	
	/** from pagination SERVICE  */
	Pagination: any[] = [];
	colorActive :string;
	selectedPage: string;
	pages: number;


  	constructor( private route: ActivatedRoute ) { }

	ngOnInit() {
		this.Pagination = [];
		this.total_number_of_posts = this.result[0].number_of_posts.publish || this.result[0].number_of_posts;
		
		this.tagID = this.route.snapshot.params['tag_id'];
		this.tagName = this.route.snapshot.params['tag_name'];

		this.route.params.subscribe( ( params: Params ) => {
		 	this.Pagination = [];
			if ( params['pageID'] ) this.currentPage = params['pageID'];
			
	    	this.blogPagination = this.createPagination( Number(this.total_number_of_posts), Number( this.currentPage) );

	    } );
	}

	createPagination(numberOfPosts: number, activePage: number) {
	  this.pages = Math.ceil( numberOfPosts/10); //10 posts per page, as wp default?
	  for ( let i = 1; i <= this.pages; i++ ) {
		this.Pagination.push({page: i, active: (activePage == i) ? this.colorActive="#502259" : this.colorActive="#468036" });
	  }
	  return this.Pagination;
  }



}
