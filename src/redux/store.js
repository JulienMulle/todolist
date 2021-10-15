import { createStore } from "redux";
import { rootReducders } from "./reducers";

//Store: attaché à Réact -accessible depuis tout les composants
export const store = createStore(rootReducders);