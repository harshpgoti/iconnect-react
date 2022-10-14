import React, { useState } from "react";
import SingleFile from "./SingleFile";

function FileUploader() {
  const [Files, setFiles] = useState([]);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFiles((prevFiles) => [...prevFiles, ...e.dataTransfer.files]);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFiles((prevFiles) => [...prevFiles, ...e.target.files]);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i <= Files.length; i++) {
      let checkUpload = Files[i].hasOwnProperty("upload");
      if (Files[i].upload === undefined) {
        setFiles((prevFiles) => {
          prevFiles[i].upload = "100%";
          return [...prevFiles];
        });
      }
    }
  };

  return (
    <>
      <form id="form-file-upload" onDragEnter={handleDrag}>
        <input
          type="file"
          id="input-file-upload"
          multiple={true}
          onChange={handleChange}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div>
            <p>click to select files or drag and drop files</p>
          </div>
        </label>
        {Files.length > 0 && (
          <button
            type="submit"
            className="button-uploadFiles"
            onClick={onSubmit}
          >
            Click to upload files
          </button>
        )}
      </form>
      <div>
        {Files &&
          Files.map((file) => {
            return <SingleFile file={file} key={file.name} />;
          })}
      </div>
    </>
  );
}

export default FileUploader;
