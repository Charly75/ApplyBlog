import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  date = new Date();
  dateString = this.date.toLocaleDateString();
  heureString = this.date.toLocaleTimeString();
  datePost =  this.heureString + ' - ' + this.dateString;

 public posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: 3,
      createdAt: this.datePost
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: -2,
      createdAt: this.datePost
    },
    {
      title: 'Mon dernier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: 0,
      createdAt: this.datePost
    }
  ];

  postsSubject = new Subject<Post[]>();

  constructor() {
     this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
    .on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPosts();
  }

  updateLove(index, loveIt) {
    this.posts[index].loveIts = loveIt;
    this.savePosts();
    this.emitPosts();
  }
}
