export default function reducer(state={departureplace:"beijing"},action){
    console.log("reducer running");
    switch(action.type){
        case "ON_CHANGE_DEPARTURE":
        return Object.assign({},state,{departureplace:action.payload})
        default:
        return state;
    }
    
}

