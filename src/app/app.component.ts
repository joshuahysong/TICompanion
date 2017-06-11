import { Component } from '@angular/core';
import { environment } from '../environments/environment';

if (environment.production) {
  var urlProduction = null;
  urlProduction = '/TICompanion';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = urlProduction; // {{url}} in the template.
}
