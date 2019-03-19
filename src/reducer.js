

const initialstate={departureplace:"beijing",PlanViewUI: 'Search'}



export default function reducer(state=initialstate,action){
    console.log("reducer running");
    switch(action.type){
        case "SEARCH":
        return Object.assign({},state,{PlanViewUI:action.payload})
        default:
        return state;
    }
    
}

// export default function reducer(state={initialview:'Search'},action){
//     console.log("reducer running");
//     switch(action.type){
//         case "ON_CHANGE_DEPARTURE":
//         return Object.assign({},state,{departureplace:action.payload})
//         default:
//         return state;
//     }
    
// }