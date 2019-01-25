import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Header, Link, selectHeaderStateTitle, selectHeaderStateHeader, selectHeaderStateLinks } from '../../stores/stores/header/header.state';
import { SetTitleAction, SetHeaderAction, SimpleHeaderAction, SetLinksAction, NavigateAction } from '../../stores/stores/header/header.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  title$: Observable<string> = this.store.pipe(select(selectHeaderStateTitle));
  header$: Observable<Header> = this.store.pipe(select(selectHeaderStateHeader));
  links$: Observable<Link[]> = this.store.pipe(select(selectHeaderStateLinks));

  constructor(
    private store: Store<any>,
    public router: Router,
  ) { }

  doNavigate(path: string) {
    this.router.navigate([path]);
  }

  navigate(link: Link) {
    this.store.dispatch(new NavigateAction({ link }));
  }

  setTitle(title: string) {
    this.store.dispatch(new SetTitleAction({ title }));
  }

  setHeader(header: Header) {
    this.store.dispatch(new SetHeaderAction({ header }));    
  }

  simpleHeader() {
    this.store.dispatch(new SimpleHeaderAction());    
  }

  setLinks(links: Link[]) {
    this.store.dispatch(new SetLinksAction({ links }));
  }

}
