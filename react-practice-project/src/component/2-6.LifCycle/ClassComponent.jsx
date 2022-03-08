import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { date: new Date() };
    this.handleClick = this.handleClick.bind(this);
    //ClassComponent에서 생명주기 이외의 메서드를 사용하고, 그 메서드가 this에 접근하려 할 때는 bind해줘야한다.
    //this가 무엇인지 알려주는 것
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 5000);
    console.log("DidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("DidUpdate");
  }

  componentWillUnmount() {
    console.log("willUnmount");
    clearInterval(this.timerID);
  }

  tick() {
    console.log("tick");
    this.setState({ date: new Date() });
  }

  handleClick() {
    alert(this.state.date);
  }

  /*
  Arrow function으로 사용하면 bind해주지 않아도된다.
  handleClick = () => {
    alert(this.state.date);
  */

  render() {
    console.log("render");
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world</h1>
        <h2>{this.state.date.toLocaleTimeString()} </h2>
      </div>
    );
  }
}

export default ClassComponent;
