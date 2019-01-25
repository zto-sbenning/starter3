import { Action } from '@ngrx/store';
import { Header, Link } from './header.state';

export enum HeaderActionType {
    set = '[Header Action Type] Set',
    simple = '[Header Action Type] Simple',
    setTitle = '[Header Action Type] Set Title',
    setLinks = '[Header Action Type] Set Links',
    navigate = '[Header Action Type] Navigate'
}

export class SetHeaderAction implements Action {
    type = HeaderActionType.set;
    constructor(public payload: { header: Header }) {}
}
export class SimpleHeaderAction implements Action {
    type = HeaderActionType.simple;
}
export class SetTitleAction implements Action {
    type = HeaderActionType.setTitle;
    constructor(public payload: { title: string }) {}
}
export class SetLinksAction implements Action {
    type = HeaderActionType.setLinks;
    constructor(public payload: { links: Link[] }) {}
}
export class NavigateAction implements Action {
    type = HeaderActionType.navigate;
    constructor(public payload: { link: Link }) {}
}

export type HeaderActions = SetHeaderAction | SimpleHeaderAction | SetTitleAction | SetLinksAction | NavigateAction;
