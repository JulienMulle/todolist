import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./actionsType";

//Actions: fonctions qui renvoient un objet aux reducers - {type: MON_ACTION, payload : {DATA}}

//action ajout d'une tache
// stockant mon string dans une const, je reduis le nombre d'erreur
export function addTask(title) {
    return{
        type: ADD_TASK,
        payload:{
            //on peut aussi le voir comme ca = title: title. grace à es6 je peux l'ecrire title           
            title
        }
    }
}
//action changement status d'une tache
export const toggleTask = (id) =>({
    type: TOGGLE_TASK,
    payload: {id}
})
//action suppression de la tache
export const deleteTask = (id) =>({
    type: DELETE_TASK,
    payload: {id}
})
