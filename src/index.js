import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import firebase from 'firebase'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDqUSmuPb3zOwJTgDBKVPWa2ZvIvpiXr4I",
    authDomain: "labfirebase-1c557.firebaseapp.com",
    databaseURL: "https://labfirebase-1c557.firebaseio.com",
    projectId: "labfirebase-1c557",
    storageBucket: "labfirebase-1c557.appspot.com",
    messagingSenderId: "222914135542"
  };
  firebase.initializeApp(config);


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

    
