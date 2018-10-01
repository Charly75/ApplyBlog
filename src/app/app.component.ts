import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: 3,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: 'Mon dernier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
