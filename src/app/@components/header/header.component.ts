import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  lastScrollTop: number = 0;

  @ViewChild('header', { static: false }) header!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    window.addEventListener(
      'scroll',
      () => {
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        // if (scrollTop >= 80) {
        //   this.renderer.addClass(this.header.nativeElement, 'fixed-header');
        // } else {
        //   if (this.header.nativeElement.classList.contains('fixed-header')) {
        //     this.renderer.removeClass(
        //       this.header.nativeElement,
        //       'fixed-header'
        //     );
        //   }
        // }

        if (scrollTop > this.lastScrollTop) {
          // downscroll code
          if (this.header.nativeElement.classList.contains('fixed-header')) {
            this.removeHeaderSlideAnimation();
          }
        } else {
          // upscroll code
          if (scrollTop >= 100) {
            this.renderer.addClass(this.header.nativeElement, 'fixed-header');
          } else {
            this.removeHeaderSlideAnimation();
          }
        }

        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
      },
      false
    );
  }

  removeHeaderSlideAnimation() {
    let timeout: any;

    timeout = setTimeout(() => {
      this.renderer.removeClass(this.header.nativeElement, 'fixed-header');
      this.renderer.removeClass(
        this.header.nativeElement,
        'fixed-header-slide-up'
      );

      clearTimeout(timeout);
    }, 255);

    this.renderer.addClass(this.header.nativeElement, 'fixed-header-slide-up');
  }
}
