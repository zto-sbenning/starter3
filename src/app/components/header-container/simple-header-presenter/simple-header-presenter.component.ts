import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Header, Link } from '../../../stores/stores/header/header.state';

@Component({
  selector: 'app-simple-header-presenter',
  templateUrl: './simple-header-presenter.component.html',
  styleUrls: ['./simple-header-presenter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleHeaderPresenterComponent implements OnInit {

  @Input() title: string;
  @Input() links: Link[];

  @Output() navigateEvent: EventEmitter<Link> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  navigate(link: Link) {
    this.navigateEvent.emit(link);
  }

}
