import { createStore } from "redux";
//Selectors: sélectionner une partie de notre store

//Actions: fonctions qui renvoient un objet aux reducers - {type: MON_ACTION, payload : {DATA}}

//Reducers: fonctions retournent un nouveau
const initialState = [{id:1, title:"Init task", completed: false}]

const tasksList = (state= initialState, action) => {
    switch(action.type) {
       // case MON_ACTION:
            //modifs
         //   return newState
        
        default:
            return state
    }
}

//Store: attaché à Réact -accessible depuis tout les composants
export const store = createStore()