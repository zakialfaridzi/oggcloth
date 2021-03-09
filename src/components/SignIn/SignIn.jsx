import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import Buttons from "../Buttons/Buttons";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";

class SignIn extends Component {
  state = { email: "", password: "" };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Sign In</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            label="Email"
            id="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            id="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <Buttons type="submit">Sign In</Buttons>
            <Buttons onClick={signInWithGoogle} type="button" isGoogleSignedIn>
              Google Sign In
            </Buttons>
            {/* <GoogleSignIn /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
