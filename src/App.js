import React from "react";
import { useState } from "react";
import Popup from "./component/Popup";
const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id);
  };
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    if (selectedId !== null) {
      // return <AnotherComponent />;
    } else {
      setShowPopup(true);
    }
  };
  const myArray = [
    { image: "./assets/toeic.jpg", text: "Luyện thi Toeic 2 kỹ năng" },
    { image: "./assets/toeic.jpg", text: "Luyện thi Toeic 4 kỹ năng" },
    { image: "./assets/toeic.jpg", text: "Luyện thi VNU-EPT" },
    { image: "./assets/toeic.jpg", text: "Luyện thi IELTS" },
    { image: "./assets/toeic.jpg", text: "Tiếng anh giao tiếp" },
    { image: "./assets/toeic.jpg", text: "Tiếng anh cho người mất gốc" },
    { image: "./assets/toeic.jpg", text: "Tiếng anh thiếu nhi" },
  ];
  return (
    <div
      style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
     
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {myArray.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              border:
                selectedId === index ? "2px solid red" : "2px solid black",
              borderRadius: "10px",
              padding: "10px",
              marginLeft: "10px",
              marginTop: "10px",
              cursor: "pointer",
              flexBasis: "23%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                src={require(`${item.image}`)}
                alt="Ảnh khóa học"
                style={{ width: "100%" }}
              />
              <p style={{ marginTop: "10px", fontSize: "18px" }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button
       style={{
        marginTop: "10px",
        width: "150px",
        height:"50px"
      }}
        onClick={handleButtonClick}
      >
        Check Selection
      </button>
      {showPopup && (
        <Popup onClose={() => setShowPopup(false)}>
          Please select an option before proceeding.
        </Popup>
      )}
    </div>
  );
};

export default App;
