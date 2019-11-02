import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitationService {
  showCitation = false;
  constructor() { }

  getCitation(): Observable<boolean> {
  	return of(this.showCitation);
  }

}
