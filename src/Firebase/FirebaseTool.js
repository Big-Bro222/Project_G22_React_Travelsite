import firebase from 'firebase/app';
import 'firebase/database';
export function updateState(uid, state) {
    // A post entry.
    var newState = {
      
      uid: uid,
      state:state
    };
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
    } else {
      currentUID = null;
    }
  }
  window.addEventListener('load', function() {

    firebase.auth().onAuthStateChanged(onAuthStateChanged);

  }, false);
