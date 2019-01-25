import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { tap } from 'rxjs/operators';
import { HeaderService } from "../../../services/header/header.service";
import { HeaderActionType, NavigateAction } from "./header.actions";

@Injectable()
export class HeaderEffects {
    constructor(
        public actions: Actions,
        public header: HeaderService
    ) {}
    @Effect({ dispatch: false })
    navigate$ = this.actions.pipe(
        ofType(HeaderActionType.navigate),
        tap((action: NavigateAction) => this.header.doNavigate(action.payload.link.path)),
    );

}
