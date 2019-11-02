import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchItem: string;
  constructor( private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
  	
  }

  onSearch( form: NgForm) {
  	console.log( form.value.searchItem );
  	this.searchItem = form.value.searchItem;
  	this.router.navigate(['pretraga/' + this.searchItem], { relativeTo: this.route } );
  	// this.getSearchInput('blog', this.searchItem)
  }

  

}
