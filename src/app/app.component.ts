import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDwGDnPc0nYXC-h3hNE8kuyRA4Hop4InlI",
    authDomain: "projet-blog-68b67.firebaseapp.com",
    databaseURL: "https://projet-blog-68b67.firebaseio.com",
    projectId: "projet-blog-68b67",
    storageBucket: "projet-blog-68b67.appspot.com",
    messagingSenderId: "182123574443"
  };
  firebase.initializeApp(config);

  }
  title = 'Blog';
}
