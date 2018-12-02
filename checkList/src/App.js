import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  render() {
    return (
      <div className="App">
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onEntered={el => {
            //el is the div element
            el.style.color = "blue";
          }}
          appear={true} // want animation when first load
        >
          <div>Happy Rosie</div>
        </CSSTransition>
        <button onClick={this.hendelClick.bind(this)}>Fade out</button>
      </div>
    );
  }
  hendelClick() {
    this.setState({
      show: this.state.show ? false : true
    });
  }
}

export default App;
