import { Action } from '@ngrx/store';
import { Layout } from './layout.state';

export enum LayoutActionType {
    set = '[Layout Action Type] Set',
    simple = '[Layout Action Type] Simple',
}

export class SetLayoutAction implements Action {
    type = LayoutActionType.set;
    constructor(public payload: { layout: Layout }) {}
}
export class SimpleLayoutAction implements Action {
    type = LayoutActionType.simple;
}

export type LayoutActions = SetLayoutAction | SimpleLayoutAction;
