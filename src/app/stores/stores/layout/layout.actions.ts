import { Action } from '@ngrx/store';
import { Layout } from './layout.state';

/**
 * All Layout Action types
 */
export enum LayoutActionType {
  set = '[Layout Action Type] Set',
  simple = '[Layout Action Type] Simple'
}

/**
 * Action to set the Layout type
 */
export class SetLayoutAction implements Action {
  /**
   * The action identifier
   */
  type = LayoutActionType.set;
  /**
   * Action constructor
   * @param payload the new Layout type
   */
  constructor(public payload: { layout: Layout }) {}
}
/**
 * Action to set the Layout type to Layout.simple
 */
export class SimpleLayoutAction implements Action {
  /**
   * The action identifier
   */
  type = LayoutActionType.simple;
}

/**
 * Union for all Layout Actions
 */
export type LayoutActions = SetLayoutAction | SimpleLayoutAction;
