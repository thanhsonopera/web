import React from "react";

const Course = (props) => {
    const { image, text } = props;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "10px" }}
    >
      <img src={require(`${image}`)} alt="Ảnh khóa học" />
      <p style={{ marginTop: "10px", fontSize:"18px" }}>{text}</p>
    </div>
  );
};

export default Course;
