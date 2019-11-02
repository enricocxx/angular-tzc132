
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

/* added for connection to Wordpress API */
// import { Observable } from 'rxjs';
// import { NgForm } from '@angular/forms';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { Headers } from '@angular/http';
/*end of add  */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'srce-ruke-tastatura';
  token = null;

  ngOnInit() {
  }
}
