import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Layout, selectLayoutStateLayout } from '../../stores/stores/layout/layout.state';
import { SetLayoutAction, SimpleLayoutAction } from '../../stores/stores/layout/layout.actions';

/**
 * Service to handle Layout data/actions
 */
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  /**
   * Observable of current Layout type
   */
  layout$: Observable<Layout> = this.store.pipe(select(selectLayoutStateLayout));

  /**
   * @ignore
   */
  constructor(private store: Store<any>) { }

  /**
   * Change the Layout type
   * @param layout the new layout type
   */
  setLayout(layout: Layout) {
    this.store.dispatch(new SetLayoutAction({ layout }));
  }

  /**
   * Set the Layout to Layout.simple
   */
  simpleLayout() {
    this.store.dispatch(new SimpleLayoutAction());
  }

}
