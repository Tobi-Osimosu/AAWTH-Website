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
  scrollEventRef: any;

  @ViewChild('header', { static: false }) header!: ElementRef;
  @ViewChild('headerToggler', { static: false }) headerToggler!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.manageHeaderSlideAnimation();

    let resizeTimeout: any;

    window.onresize = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(
        this.manageHeaderSlideAnimation.bind(this),
        100
      );
    };
  }

  manageHeaderSlideAnimation() {
    console.log('manageHeaderSlideAnimation()');

    if (window.matchMedia('(min-width: 992px)').matches) {
      this.scrollEventRef = this.scrollEvent.bind(this);

      window.addEventListener('scroll', this.scrollEventRef, true);
    } else {
      window.removeEventListener('scroll', this.scrollEventRef, true);

      this.removeHeaderSlideAnimation();
    }
  }

  scrollEvent() {
    console.log('scrollEvent()');

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

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

  toggleHeader() {
    if (
      (this.headerToggler.nativeElement as HTMLElement).classList.contains(
        'open'
      )
    ) {
      this.renderer.removeClass(this.headerToggler.nativeElement, 'open');
    } else {
      this.renderer.addClass(this.headerToggler.nativeElement, 'open');
    }
  }
}
