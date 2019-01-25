import { HeaderState, initialHeaderState, Header } from './header.state';
import { HeaderActions, HeaderActionType, SetHeaderAction, SetLinksAction, SetTitleAction } from './header.actions';

export function headerStateReducer(state: HeaderState = initialHeaderState, action: HeaderActions): HeaderState {
    switch (action.type) {
        case HeaderActionType.set: {
            const payload = (action as SetHeaderAction).payload;
            return { ...state, header: payload.header };
        }
        case HeaderActionType.simple: {
            return { ...state, header: Header.simple };
        }
        case HeaderActionType.setTitle: {
            const payload = (action as SetTitleAction).payload;
            return { ...state, title: payload.title };
        }
        case HeaderActionType.setLinks: {
            const payload = (action as SetLinksAction).payload;
            return { ...state, links: payload.links };
        }
        case HeaderActionType.navigate:
        default:
            return state;
    }
}
