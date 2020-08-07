import React, { Component } from "react";
import "./Courselist.scss";
class Courselist extends Component {
  state = {
    isEdit: true,
  };
  // rederCourse Function
  rederCourse = () => {
    const { details, deleteItem, index } = this.props;
    return (
      <li className="toggleform">
        <span>{details}</span>
        <button className="edit" onClick={this.toggle}>
          Edit Course
        </button>
        <button
          className="delete"
          onClick={() => {
            deleteItem(index);
          }}
        >
          Delete
        </button>
      </li>
    );
  };
  // edit Course
  rederEdit = () => {
    return (
      <form className="toggleform" onSubmit={this.updeteCourseItem}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.details}
        />
        <button className="btn-updete">Updete Course</button>
      </form>
    );
  };
  // updeteCourseItem
  updeteCourseItem = (e) => {
    e.preventDefault();
    let { editCourse, index } = this.props;
    editCourse(index, this.input.value);
    this.toggle();
  };
  // toggle
  toggle = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };
  render() {
    let { isEdit } = this.state;
    return <>{isEdit ? this.rederCourse() : this.rederEdit()}</>;
  }
}
export default Courselist;
