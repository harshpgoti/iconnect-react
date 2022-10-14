import React from "react";

function SingleFile(props) {
  return (
    <div className="singleFile">
      <span>{props.file.name}</span>
      {props.file.upload && (
        <div className="progress">
          <div
            className="progress__bar"
            style={{ width: props.file.upload }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default SingleFile;
