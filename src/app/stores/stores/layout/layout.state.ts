import { createSelector } from '@ngrx/store';

/**
 * Store selector for LayoutState
 */
export const layoutStateSelector = 'layout';
/**
 * All Layout type
 */
export enum Layout {
    simple = '[Layout] Simple',
}
/**
 * The Layout store
 */
export interface LayoutState {
  /**
   * Layout type
   */
    layout: Layout;
}
/**
 * The Layout initial state
 */
export const initialLayoutState: LayoutState = {
    layout: Layout.simple,
};

/**
 * Select the Layout store
 * @param state the previous state
 */
export const selectLayoutState = (state: any) => state[layoutStateSelector] as LayoutState;
/**
 * Select the Layout store type
 */
export const selectLayoutStateLayout = createSelector(selectLayoutState, (state: LayoutState) => state.layout);
