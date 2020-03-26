import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  temaEscuro: boolean = false;
  tema: string = 'tema-light';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer
  ) { }

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.remove(this.tema);
    this.overlayContainer.getContainerElement().classList.add(this.tema);
  }

  onThemeChange() {
    if(this.temaEscuro) {
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
