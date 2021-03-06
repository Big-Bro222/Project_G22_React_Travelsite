import fetch from 'cross-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'


const BASE_URL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0";
const BASE_URLGET = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/"
const CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
}
const API_KEY = {
    "X-RapidAPI-Key": "4d7d4ff10fmsh4314efafb601609p1e0648jsn8658273cf3f9"
};
const sessionKeyRegex = /v1.0\/(.*)/;



// begin to fetch data
function requestPosts() {
    return {
        type: REQUEST_POSTS,
    }
}

//achieve data fetching
function receivePosts(json) {
    return {
        type: RECEIVE_POSTS,
        posts: json,
        receivedAt: Date.now()
    }
}


// Use fetchCreatSession to get a session link to browser the live flight price data.

function fetchPosts(data) {
    return dispatch => {
        dispatch(requestPosts())
        return fetch(BASE_URL, {
            body: "cabinClass=economy&children=0&infants=0&country=US&currency=USD&locale=en-US&originPlace="+data.From+"-sky&destinationPlace="+data.To+"-sky&outboundDate="+data.Time+"&adults=1",
            headers: Object.assign({}, CONTENT_TYPE, API_KEY),
            method: "POST"
        })

            .then(response =>{
                if(response.ok===true){
         
                console.log("ok")
               return response.headers.get('location')
              
                }
                else{
                    Promise.reject("api fetch not ok")
                }
            }
            )

            .then(location => location.match(sessionKeyRegex)[1])
            .then(sessionLink => {
                return fetch(`${BASE_URLGET}${sessionLink}?sortType=price&sortOrder=asc&pageIndex=0&pageSize=10`,
                    {
                        headers: Object.assign({}, API_KEY)
                    })
            })

            .then(response => response.json()
            )

            .then(json => {
                dispatch(receivePosts(json));
            })
            .catch(reason=>{
                console.log(reason);
                dispatch(receivePosts({Itineraries:[]}));

            })
    }
}

//judge whether to fetch data or not
function shouldFetchPosts(state) {
    const posts = state.items
    if(!posts.isFetching)
    return true;
    else
    return false;
 
}

export function fetchPostsIfNeeded(data) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState())) {
            data.Time=getState().timeline[getState().currentindex]
            return dispatch(fetchPosts(data))
            
        }
    }
}