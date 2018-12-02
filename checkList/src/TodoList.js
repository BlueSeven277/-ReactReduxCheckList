import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Item from "./Item";
//import axios from "axios";
import store from "./store/index.js";
import "antd/dist/antd.css";
import "./style.css";
import { Input, Button, List } from "antd";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    //console.log(store.getState());
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <Fragment>
        <h1 style={{ marginLeft: "100px", marginTop: "50px" }}>
          Checklist: click button to add, click item to delete
        </h1>
        <p />
        <Input
          id="insertArea"
          placeholder="add something..."
          style={{ width: "600px", marginLeft: "50px" }}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <span> </span>
        <Button
          type="primary"
          // className="badge m-2 badge-primary"
          onClick={this.handleBtnClick}
        >
          Add to Checklist
        </Button>
        {/* <ul style={{ marginLeft: "60px", marginTop: "20px" }}>
          {this.getTodoItem()}
        </ul> */}
        <TransitionGroup>
          <List
            style={{ marginLeft: "60px", marginTop: "20px", width: "800px" }}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <CSSTransition in={true} timeout={1000} classNames="fade">
                <List.Item onClick={this.handleDelete.bind(this, index)}>
                  {item}
                </List.Item>
              </CSSTransition>
            )}
          />
        </TransitionGroup>
      </Fragment>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <Item
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleDelete}
        />
      );
    });
  }
  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    };
    store.dispatch(action);
  }
  handleBtnClick() {
    const action = {
      type: "add_item"
    };
    store.dispatch(action);
  }
  handleDelete(index) {
    const action = {
      type: "delete_item",
      index
    };
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
}
