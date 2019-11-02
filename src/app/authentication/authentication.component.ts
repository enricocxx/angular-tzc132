import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  user = {
  	login: '',
  	password: ''
  }
  @Input() token;
  @Output() tokenChange = new EventEmitter<string>();
  
  constructor( private http: HttpClient ) { }

  ngOnInit() {
  }

  auth() {
  	this.http.post('http://localhost/svetUcenja/wordpress/testing/wp-json', {
  		username: this.user.login,
  		password: this.user.password
  	}).subscribe((data)=> {
  		if ( data['token'] ) {
  			this.token = data['token'];
  			this.tokenChange.emit( this.token );
  			console.log(this.token)
  		}
  	})
  }

}
