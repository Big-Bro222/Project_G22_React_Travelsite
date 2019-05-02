import auth from "../auth";
import React, { Component } from "react";
import './SignIn.css'
import { Link } from 'react-router-dom';
import firebase from 'firebase/app'
import {onAuthStateChanged} from "../Firebase/FirebaseTool"
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      },
      errormessage:""
    };
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const email=this.state.email;
    const password=this.state.password;
    const auths =firebase.auth();
    const promise= auths.signInWithEmailAndPassword(email,password);

    promise.then(()=>{auth.login(() => {
      this.props.history.push("/app");
    });}).catch(e =>this.setState({ errormessage: e.message }));
    
    if (formValid(this.state)) {
      firebase.auth().onAuthStateChanged(onAuthStateChanged);
      
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => {});
  };
  render() {
    const { formErrors } = this.state;

    return (

      <div>
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>SignIn</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit" >Sign In</button>
                <div>{this.state.errormessage}</div>
                <Link to="/SignUp" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
