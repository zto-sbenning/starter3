import { Action } from '@ngrx/store';
import { Header, Link } from './header.state';

/**
 * All Header Action types
 */
export enum HeaderActionType {
  set = '[Header Action Type] Set',
  simple = '[Header Action Type] Simple',
  setTitle = '[Header Action Type] Set Title',
  setLinks = '[Header Action Type] Set Links',
  navigate = '[Header Action Type] Navigate'
}

/**
 * Action to set the Header layout type
 */
export class SetHeaderAction implements Action {
  /**
   * The action identifier
   */
  type = HeaderActionType.set;
  /**
   * Action constructor
   * @param payload the new Header layout type
   */
  constructor(public payload: { header: Header }) {}
}
/**
 * Action to set the Header layout type to Header.simple
 */
export class SimpleHeaderAction implements Action {
  /**
   * The action identifier
   */
  type = HeaderActionType.simple;
}
/**
 * Action to set the Header title
 */
export class SetTitleAction implements Action {
  /**
   * The action identifier
   */
  type = HeaderActionType.setTitle;
  /**
   * Action constructor
   * @param payload the new title
   */
  constructor(public payload: { title: string }) {}
}
/**
 * Action to set the Header links
 */
export class SetLinksAction implements Action {
  /**
   * The action identifier
   */
  type = HeaderActionType.setLinks;
  /**
   * Action constructor
   * @param payload the new link array
   */
  constructor(public payload: { links: Link[] }) {}
}
/**
 * Action to navigate to a link path
 */
export class NavigateAction implements Action {
  /**
   * The action identifier
   */
  type = HeaderActionType.navigate;
  /**
   * Action constructor
   * @param payload the link to navigate to
   */
  constructor(public payload: { link: Link }) {}
}

/**
 * Union for all Header Actions
 */
export type HeaderActions =
  | SetHeaderAction
  | SimpleHeaderAction
  | SetTitleAction
  | SetLinksAction
  | NavigateAction;
