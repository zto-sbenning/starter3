import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { Header, Link } from '../../stores/stores/header/header.state';
import { Observable } from 'rxjs';

/**
 * Container component for the application header
 */
@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {

  /**
   * Correlate header to Header enum
   */
  headerMap: { [key: string]: string } = {
    simple: Header.simple
  };

  /**
   * Observable of the title of the application
   */
  title$: Observable<string> = this.header.title$;
  /**
   * Observable of the header type of the application
   */
  header$: Observable<Header> = this.header.header$;
  /**
   * Observable of links of the application
   */
  links$: Observable<Link[]> = this.header.links$;

  /**
   * @ignore
   */
  constructor(public header: HeaderService) { }

  /**
   * @ignore
   */
  ngOnInit() {
  }
  
  /**
   * Dispatch a navigate event
   * @param link the link to navigate to
   */
  navigate(link: Link) {
    this.header.navigate(link);
  }

}
