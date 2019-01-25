import { createSelector } from "@ngrx/store";

export const layoutStateSelector = 'layout';
export enum Layout {
    simple = '[Layout] Simple',
}
export interface LayoutState {
    layout: Layout;
}
export const initialLayoutState: LayoutState = {
    layout: Layout.simple,
};

export const selectLayoutState = (state: any) => state[layoutStateSelector] as LayoutState;
export const selectLayoutStateLayout = createSelector(selectLayoutState, (state: LayoutState) => state.layout);
