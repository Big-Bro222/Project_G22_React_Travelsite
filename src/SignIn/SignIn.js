import React, { Component } from "react";
import "./SignIn.css";
import { Link } from 'react-router-dom';
import firebase from 'firebase'
import { connect } from "react-redux";

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
      authenticated:false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const email=this.state.email;
    const password=this.state.password;
    const auth =firebase.auth();
    const promise= auth.signInWithEmailAndPassword(email,password);
    promise.catch(e=>console.log(e.message));
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        this.setState({
          authenticated: true,
        });
      } else {
        this.setState({
          authenticated: false,
        });
        console.log('not logged in')
      }
    });
    this.props.handleSubmit(this.state.authenticated)
    console.log(this.state.authenticated)


    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
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

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
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
              <button type="submit"><Link to='/'>Sign In</Link></button>
              <Link to="/SignUp" className="FormField__Link">Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (value) => {
          const action = { type: "SUBMIT_SIGNIN", payload: value };
          dispatch(action);
          (console.log(value))
      },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

