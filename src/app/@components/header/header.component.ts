import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  lastScrollTop: number = 0;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener(
      'scroll',
      () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > this.lastScrollTop) {
          // downscroll code
          console.log('DownScroll');
        } else {
          // upscroll code
          console.log('UpScroll');
        }

        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
      },
      false
    );
  }
}
