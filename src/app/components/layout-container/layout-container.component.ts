import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout/layout.service';
import { Observable } from 'rxjs';
import { Layout } from '../../stores/stores/layout/layout.state';

/**
 * Container component for the application layout
 */
@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.css']
})
export class LayoutContainerComponent implements OnInit {

  /**
   * Correlate layout to layout enum
   */
  layoutMap: { [key: string]: string } = {
    simple: Layout.simple,
  };

  /**
   * Observable of the current layout
   */
  layout$: Observable<Layout> = this.layout.layout$;

  /**
   * @ignore
   */
  constructor(public layout: LayoutService) { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

}
