import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Header, Link } from '../../../stores/stores/header/header.state';

/**
 * Simple header style
 */
@Component({
  selector: 'app-simple-header-presenter',
  templateUrl: './simple-header-presenter.component.html',
  styleUrls: ['./simple-header-presenter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleHeaderPresenterComponent implements OnInit {

  /**
   * Title of the header
   */
  @Input() title: string;
  /**
   * Links of the header
   */
  @Input() links: Link[];

  /**
   * Event fire on click on a link
   */
  @Output() navigateEvent: EventEmitter<Link> = new EventEmitter;

  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Navigate to a page
   * @param link the link to navigate to
   */
  navigate(link: Link) {
    this.navigateEvent.emit(link);
  }

}
