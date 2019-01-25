import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { LayoutService } from "../../../services/layout/layout.service";

@Injectable()
export class LayoutEffects {
    constructor(
        public actions: Actions,
        public layout: LayoutService
    ) {}
}
