
import firebase from "firebase"
export function updateState(uid, state) {
    // A post entry.
    var newState = {
      
      uid: uid,
      state:state
    };
  
    // Get a key for a new Post.
    // var newPostKey = firebase.database().ref().child('states').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/state/' ] = newState;
    updates['/user-state/' + uid] = newState;
  
    return firebase.database().ref().update(updates);
  }

  export function writeUserData(userId, email) {
    firebase.database().ref('users/' + userId).set({

      email: email

    });
  }

  export var currentUID;

  export function onAuthStateChanged(user) {
    // We ignore token refresh events.
    if (user && currentUID === user.uid) {
      return;
    }
    if (user) {
      currentUID = user.uid;
   
      writeUserData(user.uid, user.email);
    //   startDatabaseQueries();
    } else {
      // Set currentUID to null.
      currentUID = null;
      // Display the splash page where you can sign-in.
    //   splashPage.style.display = '';
    }
  }
  window.addEventListener('load', function() {

    firebase.auth().onAuthStateChanged(onAuthStateChanged);

  }, false);
