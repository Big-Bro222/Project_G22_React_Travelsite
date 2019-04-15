import { combineReducers } from 'redux'



const initialstate={departuredate:'yessss',
                    returndate:'nooooo',
                    departureplace:'beijing',
                    currentindex: 0,
                    isFetching: false,
                    //   didInvalidate: false,
                      items: []}



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
        case "ON_CHANGE_DEPARTURE":
        return Object.assign({},state,{departuredate:action.payload})
        case "ON_CHANGE_RETURN":
        return Object.assign({},state,{returndate:action.payload})
        case "GENERATE_TIME_LINE":
        return Object.assign({},state,{timeline:action.timeline,UI:action.UI})
        case "TIMELINE_CLICK":
        return Object.assign({},state,{currentindex:action.payload})
        case "ADD_PLAN":
        
        return Object.assign({},state,{UI:action.payload})
        case "CHANGE_PLAN":
        return Object.assign({},state,{UI:action.payload})
        case "REQUEST_POSTS":
        return Object.assign({}, state, {
          isFetching: true,
        //   didInvalidate: false
        })
      case "RECEIVE_POSTS":
        return Object.assign({}, state, {
          isFetching: false,
        //   didInvalidate: false,
          items: action.posts,
          lastUpdated: action.receivedAt
        })
    
        default:
        return state;
    }
    
}




  function flightDataFetch(
    state = {
      isFetching: false,
    //   didInvalidate: false,
      items: []
    },
    action
  ) {
    switch (action.type) {
    //   case INVALIDATE_SUBREDDIT:
    //     return Object.assign({}, state, {
    //       didInvalidate: true
    //     })
      case "REQUEST_POSTS":
        return Object.assign({}, state, {
          isFetching: true,
        //   didInvalidate: false
        })
      case "RECEIVE_POSTS":
        return Object.assign({}, state, {
          isFetching: false,
        //   didInvalidate: false,
          items: action.posts,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }


//   const rootReducer = combineReducers({
//    Datereducer,
//     flightDataFetch
//   })

//   export default rootReducer;