import { Component, OnInit } from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  tema: string = "tema-light";

  constructor(private overlayContainer: OverlayContainer) { }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.remove(this.tema);
    this.overlayContainer.getContainerElement().classList.add(this.tema);
  }

}
