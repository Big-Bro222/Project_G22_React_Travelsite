import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBhzhhGWi1TLDQyl8dyDOhR6WIG-BRcYKc",
  authDomain: "travelplanner-web.firebaseapp.com",
  databaseURL: "https://travelplanner-web.firebaseio.com",
  projectId: "travelplanner-web",
  storageBucket: "travelplanner-web.appspot.com",
  messagingSenderId: "148373620558"
};
  firebase.initializeApp(config);


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

    
