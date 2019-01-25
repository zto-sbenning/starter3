import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { LayoutService } from '../../../services/layout/layout.service';

/**
 * Layout store effects
 */
@Injectable()
export class LayoutEffects {
  /**
   * @ignore
   */
    constructor(
        public actions: Actions,
        public layout: LayoutService
    ) {}
}
