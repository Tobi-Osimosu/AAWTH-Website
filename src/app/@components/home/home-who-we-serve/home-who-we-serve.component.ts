import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home-who-we-serve',
  templateUrl: './home-who-we-serve.component.html',
  styleUrls: ['./home-who-we-serve.component.scss'],
})
export class HomeWhoWeServeComponent implements OnInit, AfterViewInit {
  progressBarInterval: any;

  @ViewChild('progressBar', { static: false }) progressBar!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setProgressBarInterval();
  }

  get progressBarHeight() {
    if (this.progressBar !== undefined) {
      return (this.progressBar!.nativeElement as HTMLElement)!.clientHeight;
    } else {
      return 0;
    }
  }

  setProgressBarInterval() {
    this.progressBarInterval = setInterval(
      this.incrementProgressBar.bind(this),
      500
    );
  }

  incrementProgressBar() {
    let progressBarHeight = (this.progressBar.nativeElement as HTMLElement)
      .clientHeight;

    if (progressBarHeight < 220) {
      this.renderer.setStyle(
        this.progressBar.nativeElement,
        'height',
        `${progressBarHeight + 10}px`
      );
    } else {
      this.clearProgressBarInterval();
    }
  }

  clearProgressBarInterval() {
    clearInterval(this.progressBarInterval);

    this.renderer.setStyle(this.progressBar.nativeElement, 'height', `0px`);

    this.setProgressBarInterval();
  }
}
