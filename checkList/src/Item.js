import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.hendleClick = this.hendleClick.bind(this);
  }
  render() {
    const { content } = this.props;
    return (
      <div onClick={this.hendleClick}>
        <h2>{content}</h2>
      </div>
    );
  }
  hendleClick() {
    console.log("aaaa");
    const { deleteItem, index } = this.props;
    deleteItem(index);
    // this.props.deleteItem(this.props.index);
  }
}
Item.PropTypes = {
  //check the type of parameter passed from father component to child component
  content: PropTypes.string, //content has to be string format
  deleteItem: PropTypes.func,
  index: PropTypes.number
};
Item.defaultProps = {};
