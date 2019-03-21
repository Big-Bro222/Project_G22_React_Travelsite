

const initialstate={departuredate:'yessss',
                    returndate:'nooooo',
                    departureplace:'beijing',
                    returnplace:'shanghai',
                    currentindex: 0,
                    children:0,
                    infants:0,
                    adults:0,
                    filghtclass:"Economy",
                    currentdate:"2019-03-04"}



// export default function reducer(state=initialstate,action){
//     console.log("reducer running");
//     switch(action.type){
        // case "SEARCH":
        // return Object.assign({},state,{PlanViewUI:action.payload})
//         default:
//         return state;
//     }
    
// }

export default function Datereducer(state=initialstate,action){
    console.log("reducer running");
    switch(action.type){
        case "CHANGE_DEPARTURE_DATE":
        return Object.assign({},state,{departuredate:action.payload})
        case "CHANGE_RETURN_DATE":
        return Object.assign({},state,{returndate:action.payload})
        case "GENERATE_TIME_LINE":
        return Object.assign({},state,{timeline:action.timeline,
                                       UI:action.UI,
                                       departureplaces:action.departureplaces})
        case "TIMELINE_CLICK":
        return Object.assign({},state,{currentindex:action.payload})
        case "ADD_PLAN":
        return Object.assign({},state,{UI:action.payload})
        case "SET_CHILDREN":
        return Object.assign({},state,{children:action.payload})
        case "SET_INFANTS":
        return Object.assign({},state,{infants:action.payload})
        case "SET_ADULTS":
        return Object.assign({},state,{adults:action.payload})
        case "CHANGE_DEPARTURE_PLACE":
        return Object.assign({},state,{departureplace:action.payload})
        case "CHANGE_RETURN_PLACE":
        return Object.assign({},state,{returnplace:action.payload})
        case "SET_FLIGHT_CLASS":
        return Object.assign({},state,{filghtclass:action.payload})
        // case "CHANGE_RETURN_PLACE":
        // return Object.assign({},state,{currentdate:action.payload})
        default:
        return state;
    }
    
}