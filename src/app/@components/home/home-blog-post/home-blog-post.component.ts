import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-blog-post',
  templateUrl: './home-blog-post.component.html',
  styleUrls: ['./home-blog-post.component.scss'],
})
export class HomeBlogPostComponent implements OnInit {
  blogPosts = [
    {
      blog_header: 'Celebrating International Day of Women',
      blog_image: '/assets/image/blog.png',
      author: 'ADAOBI O',
      time: '2 days ago',
    },
    {
      blog_header: 'Women leveling up in Tech world',
      blog_image: '/assets/image/blog.png',
      author: 'ADAOBI O',
      time: '2 weeks ago',
    },
    {
      blog_header: 'How has covid’19 accelerated the world of hospitality',
      blog_image: '/assets/image/blog.png',
      author: 'ADAOBI O',
      time: '2 months ago',
    },
    {
      blog_header: 'How can organization improve staff productivity',
      blog_image: '/assets/image/blog.png',
      author: 'ADAOBI O',
      time: '3 months ago',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
