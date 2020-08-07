import React from "react";
import "./Coursefrom.scss";
const Coursefrom = (props) => {
  return (
    <form className="add" onSubmit={props.addCourse}>
      <input
        type="text"
        id="name"
        onChange={props.updetaCourse}
        value={props.current}
      />
      <button>Add Course</button>
    </form>
  );
};

export default Coursefrom;
