import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render(){
    return <div>Hello, {this.props.name}!</div>
  }
}

ReactDOM.render(<App name="Talentio" />, document.getElementById("root"));