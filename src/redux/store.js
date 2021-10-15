import { createStore } from "redux";
//Selectors: sélectionner une partie de notre store

//Actions: fonctions qui renvoient un objet aux reducers - {type: MON_ACTION, payload : {DATA}}

//Reducers: fonctions retournent un nouveau

//Store: attaché à Réact -accessible depuis tout les composants
export const store = createStore()