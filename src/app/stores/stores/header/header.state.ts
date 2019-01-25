import { createSelector } from '@ngrx/store';

/**
 * Store selector for HeaderState
 */
export const headerStateSelector = 'header';
/**
 * All Header layout type
 */
export enum Header {
    simple = '[Header] Simple',
}
/**
 * A link in the Header
 */
export interface Link {
  /**
   * Link display name
   */
    name: string;
    /**
     * Link location path
     */
    path: string;
    /**
     * Link icon name
     */
    icon: string;
}
/**
 * The Header store
 */
export interface HeaderState {
  /**
   * Header title
   */
    title: string;
    /**
     * Header layout type
     */
    header: Header;
    /**
     * Header link array
     */
    links: Link[];
}
/**
 * The Header initial state
 */
export const initialHeaderState: HeaderState = {
    title: 'Starter',
    header: Header.simple,
    links: [
        { name: 'HOME', path: '/home', icon: 'home' },
        { name: 'ABOUT', path: '/about', icon: 'info' },
    ]
};

/**
 * Select the Header store
 * @param state the previous state
 */
export const selectHeaderState = (state: any) => state[headerStateSelector] as HeaderState;
/**
 * Select the Header store title
 * @param state the previous state
 */
export const selectHeaderStateTitle = createSelector(selectHeaderState, (state: HeaderState) => state.title);
/**
 * Select the Header store layout type
 * @param state the previous state
 */
export const selectHeaderStateHeader = createSelector(selectHeaderState, (state: HeaderState) => state.header);
/**
 * Select the Header store links
 * @param state the previous state
 */
export const selectHeaderStateLinks = createSelector(selectHeaderState, (state: HeaderState) => state.links);
