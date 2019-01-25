import { layoutStateSelector } from "./layout/layout.state";
import { layoutStateReducer } from "./layout/layout.reducer";
import { headerStateSelector } from "./header/header.state";
import { headerStateReducer } from "./header/header.reducer";
import { LayoutEffects } from "./layout/layout.effects";
import { HeaderEffects } from "./header/header.effects";

export const reducers = {
    [layoutStateSelector]: layoutStateReducer,
    [headerStateSelector]: headerStateReducer,
};
export const effects = [
    LayoutEffects,
    HeaderEffects,
];
