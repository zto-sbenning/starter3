import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, filter } from 'rxjs/operators';
import { HeaderService } from '../../../services/header/header.service';
import { HeaderActionType, NavigateAction } from './header.actions';

/**
 * Header store effects
 */
@Injectable()
export class HeaderEffects {
  /**
   * @ignore
   */
    constructor(
        public actions: Actions,
        public header: HeaderService
  ) { }
  /**
   * An effect to map a NavigateAction to a router.navigate call
   * if the path in the action is not active
   */
    @Effect({ dispatch: false })
    navigate$ = this.actions.pipe(
      ofType(HeaderActionType.navigate),
      filter((action: NavigateAction) => !this.header.isActive(action.payload.link.path)),
      tap((action: NavigateAction) => this.header.doNavigate(action.payload.link.path)),
    );

}
