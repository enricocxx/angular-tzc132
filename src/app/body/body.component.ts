import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CitationService } from '../services/citation.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  /** get width of main box element */  
  @ViewChild('mainBox') mainBox: ElementRef;
  imageWidth: number;

  /** manipulate with sidebar */
  displayCitation: string ="none";
  moveSidebarLeft = ""; 
  closeSidebar = "";

  /** hide background after sidebar opening */
  hideBackgroundPage: string = "block";
  
  /** hiding sidebar on homepage and showing it on other pages */
  decideWidth = "col-lg-9";
  displaySidebar = "inline-block";

  constructor( 
              private citation: CitationService, 
              private router: Router ) { }

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
       //if frontpage is loaded, hide sidebar and display full width - large screens
        if ( e.url == '/' ) {
          this.decideWidth="col-lg-12";
          this.displaySidebar = "none";
        } else {
          this.decideWidth="col-lg-9";
          this.displaySidebar = "inline-block";
        } 
      }
    });
  }  

  /** catch event from sidebar component abd change body component properties accordingly. at the moment can't figure out better design */
  confirmCitationDisplaying() {
    this.displayCitation = "inline-block";
    this.moveSidebarLeft = "show-citation";
    this.closeSidebar = "";
    //https://stackoverflow.com/questions/45956290/how-to-use-js-property-like-offsetwidth-in-angular-4
    //fix this error, and check for better 'citation' solution, more reusable
    this.imageWidth = this.mainBox.nativeElement.offsetWidth;
    this.hideBackgroundPage = "none";
  }
  /** same as previous function -> closing the sidebar citation component */
  stopCitationDisplaying() {
    this.displayCitation = "none"; 
    this.moveSidebarLeft = "";
    this.closeSidebar = "hide-citation";
    this.imageWidth = 0;  
    this.hideBackgroundPage = "inline-block"; 
  }
}
