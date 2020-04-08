import React, { Component } from "react";

import axios from "axios";
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  // componentDidMount() {
  //   const newLocal = "http://localhost:5000/Users";
  //   axios
  //     .get(newLocal)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
  onSubmit(event) {
    event.preventDefault();
    console.log("say hello");
    this.newMethod();
  }

  newMethod() {
    // Break our problem into small parts:
    // 1. Make HTTP request to server and get response
    // 2. Use response to set the state.
    // Get data as an array and console.log it
    // Select one username from the data and console.log it
    // Now that you have a string for the username, set the state
    // username: theNewStringYouHave
    //var tags = posts.map(post => post.tag);

    // get http request
    axios
      .get(`http://localhost:5000/Users`)
      // select one username from the data
      .then((response) => response.data[0].name)
      // set state username to that name
      // here you are passing it an object { username: "abdo" }
      .then((name) =>
        this.setState({
          username: name,
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <form className="button" onSubmit={this.onSubmit}>
        <h1>{this.state.username}</h1>
        <button type="submit" className="button-1 button_1">
          Button
        </button>
        <input type="text"></input>
        <input type="email"></input>
      </form>
    );
  }
}
export default Button;
