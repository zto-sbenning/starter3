import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { Header, Link } from '../../stores/stores/header/header.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {

  headerMap: { [key: string]: string } = {
    simple: Header.simple
  };

  title$: Observable<string> = this.header.title$;
  header$: Observable<Header> = this.header.header$;
  links$: Observable<Link[]> = this.header.links$;

  constructor(public header: HeaderService) { }

  ngOnInit() {
  }
  
  navigate(link: Link) {
    this.header.navigate(link);
  }

}
