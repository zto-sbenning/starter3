import { LayoutState, initialLayoutState, Layout } from './layout.state';
import { LayoutActions, LayoutActionType, SetLayoutAction } from './layout.actions';

/**
 * A pur function who compute a LayoutState based on a previous one and a dispatched LayoutAction action
 * @param state the previous state
 * @param action the dispatched action
 */
export function layoutStateReducer(state: LayoutState = initialLayoutState, action: LayoutActions): LayoutState {
    switch (action.type) {
        case LayoutActionType.set: {
            const payload = (action as SetLayoutAction).payload;
            return { ...state, layout: payload.layout };
        }
        case LayoutActionType.simple: {
            return { ...state, layout: Layout.simple };
        }
        default:
            return state;
    }
}
