import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * Simple layout
 */
@Component({
  selector: 'app-simple-layout-presenter',
  templateUrl: './simple-layout-presenter.component.html',
  styleUrls: ['./simple-layout-presenter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleLayoutPresenterComponent implements OnInit {

  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

}
