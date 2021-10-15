import { createStore, combineReducers } from "redux";
//Selectors: sélectionner une partie de notre store

//Actions: fonctions qui renvoient un objet aux reducers - {type: MON_ACTION, payload : {DATA}}

//action ajout d'une tache

// stockant mon string dans une const, je reduis le nombre d'erreur
const ADD_TASK = "ADD_TASK"
function addTask(title) {
    return{
        type: ADD_TASK,
        payload:{
            //on peut aussi le voir comme ca = title: title. grace à es6 je peux l'ecrire title           
            title
        }
    }
}
//action changement status d'une tache

//action suppression de la tache

//Reducers: fonctions retournent un nouveau
const initialState = [{id:1, title:"Init task", completed: false}]

const tasksList = (state= initialState, action) => {
    switch(action.type) {
       case ADD_TASK:
           return [...state,{
               id: new Date().getTime(),
               title: action.payload.title,
               completed: isCompleted
           }]
        
        default:
            return state
    }
}
// on combine plusieurs reducer pour pouvoir les passés directement dans le store
const rootReducders = combineReducers({
    tasksList
})
//Store: attaché à Réact -accessible depuis tout les composants
export const store = createStore(rootReducders)