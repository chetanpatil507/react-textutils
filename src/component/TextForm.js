import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log("handle on change");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-3 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            className="btn btn-primary my-3 mx-1 my-1"
            disabled={text.length === 0}
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary my-3 mx-1 my-1"
            disabled={text.length === 0}
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary my-3 mx-1 my-1"
            disabled={text.length === 0}
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          Word count is{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          and Characters are {text.length}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
