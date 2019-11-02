import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { PostsService } from '../../posts/posts.service';
import { Location } from '@angular/common'; //get active url
import { from } from 'rxjs';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  section: string
  sectionTitle: string;
  sectionText: string;
  citationImage: string;
  
  //from service
  // citationShow: string = this.sidebarService.citationShow;
  // displayCitation: string = this.sidebarService.displayCitation;
  // displayArrowRight: string = this.sidebarService.displayArrowRight;

  displayCitation: string = "none";
  citationShow: string = "citation";
  moveSidebarLeft: string = "move-sidebar-left";
  moveSidebarRight: string = "move-sidebar-right";

  displayArrowRight: string = "none";
  displayArrowLeft: string = "inline-block";
 

  constructor( private route: ActivatedRoute, 
               private router: Router, 
               private postsService: PostsService, 
               public location: Location ) {


  }

  ngOnInit() {
    /** control text for citation ??? */
     this.router.events.subscribe((e) => {
       
      if (e instanceof NavigationEnd) {
        this.closeCitation(); // url change = someone clicked on navigation -> close citation

        this.section = e.url;
        this.controlDisplayingOfCitation( this.section );
        }
      });
      console.log( "width", this.imageWidth );
  }

  
  controlDisplayingOfCitation( currentSection ) {
   if ( currentSection == '/blog' || currentSection.indexOf('/blog/') == 0 ) {
      this.sectionTitle = 'Blog';
      this.sectionText = "Putovanja, razmišljanja, ideje, lično, traganje za istinom, udubljivanje..";
    } else if ( currentSection == '/log' || currentSection.indexOf('/log/') == 0) {
      this.sectionTitle = 'Log';
      this.sectionText = "Pozdravna poruka i istorija promena na sajtu...";
    } else if ( currentSection == '/b1t0v11bajt0v1' || currentSection.indexOf('/b1t0v11bajt0v1/') == 0 ) {
      this.sectionTitle = 'Bitovi i bajtovi';
      this.sectionText = "Ucenje, programiranje, deljenje, kompjuteri i mreze, operativni sistemi...";
    } else if ( currentSection == '/premotavanje/muzika' || currentSection.indexOf('/premotavanje/muzika') == 0 ) {
      this.sectionTitle = "Muzika";
      this.sectionText = "Sta se slusalo u zadnje vreme, krajnje subjektivno i eklekticno, uz vece davanje paznje DIY i andergraund muzici...";
    } else if ( currentSection == '/premotavanje/knjige' || currentSection.indexOf('/premotavanje/knjige') == 0 ) {
      this.sectionTitle = "Knjige";
      this.sectionText = "Sta se citalo u zadnje vreme, ideje i praksa...";
    } else if ( currentSection.indexOf('/pretraga/') == 0 ) {
      this.sectionTitle = "Pretraga";
      this.sectionText = "Pretrazi sajt, bez zajebancije...";
    } else if ( currentSection.indexOf('/tags/') == 0 ) {
      this.sectionTitle = "Tagovi";
      this.sectionText = "Pretrazi sajt, pomocu tagova raznih...";
    } else {
      //  this.sectionTitle = "Post";
      // this.sectionText = "Individualni post o svemu i svacemu.";
    }
  }

  @Input() imageWidth: number;
  @Output() startCitationDisplaying = new EventEmitter<string>();
  @Output() stopCitationDisplaying = new EventEmitter<string>();



  showCitation() {
    this.displayCitation = "inline-block";
    this.citationShow = "citation-show";
    this.startCitationDisplaying.emit(  );
    this.displayArrowRight = "inline-block";
    this.displayArrowLeft = "none";
    // let citationResult; 

    this.postsService.getCitation().subscribe( result => {
      //find random citation
      let citationLength = result.length;
      let randCitate = Math.floor( Math.random() * citationLength );
      this.sectionText = result[randCitate].content.rendered;
      this.citationImage = result[randCitate].featured_image_src;
      console.log( this.citationImage )
    })
     this.sectionTitle = 'Citati';
     
  }

  //oposite to showCitation
  closeCitation() {
    this.displayCitation = "none";
    this.citationShow = "citation";
    this.stopCitationDisplaying.emit( this.moveSidebarRight );
    this.displayArrowRight = "none";
    this.displayArrowLeft = "inline-block";
    // console.log( this.router.routerState.snapshot.url );
    this.section = this.router.routerState.snapshot.url;
    this.controlDisplayingOfCitation( this.section );  
          
  }

}
