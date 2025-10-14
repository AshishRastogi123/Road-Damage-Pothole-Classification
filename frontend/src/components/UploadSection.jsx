import React, { useState } from "react";
import "./UploadSection.css";

function UploadSection() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleGenerate = () => {
    if (!file) {
      alert("Please upload an image first!");
      return;
    }
    setResult("🎉 PDF Generated Successfully! 🎉");
  };

  return (
    <div className="upload-wrapper">
      <div className="upload-card">
        <h2 className="upload-title">Upload Your Image</h2>

        {preview && <img src={preview} alt="preview" className="image-preview" />}

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
        />

        <button onClick={handleGenerate} className="generate-btn">
          Generate Result
        </button>

        {file && <p className="file-name">Selected File: {file.name}</p>}

        {result && <div className="result-box">{result}</div>}
      </div>
    </div>
  );
}

export default UploadSection;
