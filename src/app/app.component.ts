import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Wise-ERP';
  page: string = 'Faturamentos';

  temaEscuro: boolean = false;
  tema: string = 'tema-light';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.remove(this.tema);
    this.overlayContainer.getContainerElement().classList.add(this.tema);
  }

  onPageChange(): void {
    if (this.router.url == '/invoices') {
      this.page = 'Faturamentos'
    } else {
      this.page = 'Duplicatas';
    }
  }

  onThemeChange() {
    if (this.temaEscuro) {
      this.tema = 'tema-dark';
    } else {
      this.tema = 'tema-light'
    }
    this.overlayContainer.getContainerElement().classList.remove(this.tema);
    this.overlayContainer.getContainerElement().classList.add(this.tema);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
