import React, { Component } from "react";
import "./App.scss";
import Courselist from "./Components/Courselist/Courselist";
import Courseform from "./Components/Coursefrom/Coursefrom";

class App extends Component {
  state = {
    courses: [
      { name: "html" },
      { name: "css" },
      { name: "js" },
      { name: "react" },
    ],
    current: "",
  };

  updetaCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  addCourse = (e) => {
    e.preventDefault();
    const { courses, current } = this.state;
    if (current === "") {
      return false;
    } else {
      courses.push({ name: current });
      this.setState({
        courses,
        current: "",
      });
    }
  };

  deleteItem = (index) => {
    const { courses } = this.state;
    courses.splice(index, 1);
    this.setState({ courses });
  };

  editCourse = (index, value) => {
    let { courses } = this.state;
    let course = courses[index];
    course["name"] = value;
    this.setState({ courses });
  };

  render() {
    const { courses } = this.state;
    let length = courses.length;
    const courselist = length ? (
      courses.map((course, index) => {
        return (
          <Courselist
            details={course.name}
            key={index}
            index={index}
            deleteItem={this.deleteItem}
            editCourse={this.editCourse}
          />
        );
      })
    ) : (
      <p>There are no courses</p>
    );

    return (
      <section className="container">
        <h1>Add Course</h1>
        <Courseform
          updetaCourse={this.updetaCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        <ul>{courselist}</ul>
      </section>
    );
  }
}

export default App;
