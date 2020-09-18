import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bookshelves';

  constructor() {
    // Your web app's Firebase configuration
    let firebaseConfig = {
      apiKey: 'AIzaSyCyGBrE5SZg-7lUPLn3o-8rr2phOfoWjHI',
      authDomain: 'ocr-angular-bookshelves-dd64e.firebaseapp.com',
      databaseURL: 'https://ocr-angular-bookshelves-dd64e.firebaseio.com',
      projectId: 'ocr-angular-bookshelves-dd64e',
      storageBucket: 'ocr-angular-bookshelves-dd64e.appspot.com',
      messagingSenderId: '46550816932',
      appId: '1:46550816932:web:94cbf9a2729c77608fee31',
      measurementId: 'G-LS6NF2SXYZ'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

  }
}
