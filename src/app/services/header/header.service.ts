import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {
  Header,
  Link,
  selectHeaderStateTitle,
  selectHeaderStateHeader,
  selectHeaderStateLinks
} from '../../stores/stores/header/header.state';
import {
  SetTitleAction,
  SetHeaderAction,
  SimpleHeaderAction,
  SetLinksAction,
  NavigateAction
} from '../../stores/stores/header/header.actions';
import { Observable } from 'rxjs';

/**
 * Service to handle Header data/actions
 */
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  /**
   * Observable of current Header title
   */
  title$: Observable<string> = this.store.pipe(select(selectHeaderStateTitle));
  /**
   * Observable of current Header layout type
   */
  header$: Observable<Header> = this.store.pipe(select(selectHeaderStateHeader));
  /**
   * Observable of current Header links
   */
  links$: Observable<Link[]> = this.store.pipe(select(selectHeaderStateLinks));

  /**
   * @ignore
   **/
  constructor(
    private store: Store<any>,
    public router: Router,
  ) { }

  /**
   * Test if a path is active
   * @param path the path to test
   */
  isActive(path: string): boolean {
    return this.router.isActive(path, false);
  }

  /**
   * Call Router.navigate method to change location
   * @param path the path to navigate to
   */
  doNavigate(path: string) {
    this.router.navigate([path]);
  }

  /**
   * Dispatch an intent action to navigate to a link.path
   * @param link the link to navigate to
   */
  navigate(link: Link) {
    this.store.dispatch(new NavigateAction({ link }));
  }

  /**
   * Change the Header title
   * @param title the new title
   */
  setTitle(title: string) {
    this.store.dispatch(new SetTitleAction({ title }));
  }

  /**
   * Change the Header layout type
   * @param header the new layout type
   */
  setHeader(header: Header) {
    this.store.dispatch(new SetHeaderAction({ header }));
  }

  /**
   * Set the Header layout to Header.simple
   */
  simpleHeader() {
    this.store.dispatch(new SimpleHeaderAction());
  }

  /**
   * Change the Header link array
   * @param links the new link array
   */
  setLinks(links: Link[]) {
    this.store.dispatch(new SetLinksAction({ links }));
  }

}
