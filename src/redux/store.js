import { createStore, combineReducers } from "redux";
//Selectors: sélectionner une partie de notre store
export const getTasks = store => store.tasksList
//ou avec une function : export function getTask(store) {return store.taskList}
export const getCompletedTasks = sotre => sotre.tasksList.filter(task => task.completed)
//Actions: fonctions qui renvoient un objet aux reducers - {type: MON_ACTION, payload : {DATA}}

//action ajout d'une tache

// stockant mon string dans une const, je reduis le nombre d'erreur
const ADD_TASK = "ADD_TASK"
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

//action suppression de la tache

//Reducers: fonctions retournent un nouveau
const initialState = [{id:1, title:"Init task", completed: false}]

const tasksList = (state= initialState, action) => {
    switch(action.type) {
       case ADD_TASK:
           return [...state,{
               id: new Date().getTime(),
               title: action.payload.title,
               isCompleted: false
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