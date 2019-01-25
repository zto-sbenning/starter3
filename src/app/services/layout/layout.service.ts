import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Layout, selectLayoutStateLayout } from '../../stores/stores/layout/layout.state';
import { SetLayoutAction, SimpleLayoutAction } from '../../stores/stores/layout/layout.actions';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  layout$: Observable<Layout> = this.store.pipe(select(selectLayoutStateLayout));

  constructor(private store: Store<any>) { }

  setLayout(layout: Layout) {
    this.store.dispatch(new SetLayoutAction({ layout }));
  }
  simpleLayout() {
    this.store.dispatch(new SimpleLayoutAction());
  }

}
