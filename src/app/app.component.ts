import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './@core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loadedTheme!: string;
  newLoadedTheme!: string;

  constructor(private themeService: ThemeService, private renderer: Renderer2) {
    this.themeService.load();
  }

  ngOnInit(): void {
    this.loadedTheme = this.themeService.currentActive();
    this.newLoadedTheme = this.loadedTheme;
  }
}
