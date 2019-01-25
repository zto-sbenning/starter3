import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout/layout.service';
import { Observable } from 'rxjs';
import { Layout } from '../../stores/stores/layout/layout.state';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.css']
})
export class LayoutContainerComponent implements OnInit {

  layoutMap: { [key: string]: string } = {
    simple: Layout.simple,
  };

  layout$: Observable<Layout> = this.layout.layout$;

  constructor(public layout: LayoutService) { }

  ngOnInit() {
  }

}
