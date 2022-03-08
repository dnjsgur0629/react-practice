import React, { Component } from "react";

class ClassComponent extends Component {
  //기본 상태값 설정
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //Component가 그려진 직후에 호출
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //Component가 사라지기 직전에 호출
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  //실직적으로 그려주는 메서드
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClassComponent;
