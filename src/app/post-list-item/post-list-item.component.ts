import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

  @Input() onePost: Post;
  @Input() indexPost ;

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router) { }

  ngOnInit() {
  }


  onLoveIt() {
    this.onePost['loveIts'] = this.onePost['loveIts'] + 1;
    this.postsService.updateLove(this.indexPost, this.onePost['loveIts']);
  }

  onDontLoveIt() {
    this.onePost['loveIts'] = this.onePost['loveIts'] - 1;
    this.postsService.updateLove(this.indexPost, this.onePost['loveIts']);
  }

  onDelete() {
    console.log('this.indexPost'  + this.indexPost);
    this.postsService.deletePost(this.indexPost);
  }
}
