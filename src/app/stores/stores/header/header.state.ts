import { createSelector } from "@ngrx/store";

export const headerStateSelector = 'header';
export enum Header {
    simple = '[Header] Simple',
}
export interface Link {
    name: string;
    path: string;
    icon: string;
}
export interface HeaderState {
    title: string;
    header: Header;
    links: Link[];
}
export const initialHeaderState: HeaderState = {
    title: 'Starter',
    header: Header.simple,
    links: [
        { name: 'HOME', path: '/home', icon: 'home' },
        { name: 'ABOUT', path: '/about', icon: 'info' },
    ]
};

export const selectHeaderState = (state: any) => state[headerStateSelector] as HeaderState;
export const selectHeaderStateTitle = createSelector(selectHeaderState, (state: HeaderState) => state.title);
export const selectHeaderStateHeader = createSelector(selectHeaderState, (state: HeaderState) => state.header);
export const selectHeaderStateLinks = createSelector(selectHeaderState, (state: HeaderState) => state.links);
