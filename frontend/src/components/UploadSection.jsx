import React, { useState } from "react";
import "./UploadSection.css";

function UploadSection() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

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

const handleGenerate = async () => {
  if (!file) {
    alert("Please upload an image first!");
    return;
  }

  setLoading(true);

  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await fetch(
      "https://maritza-perverse-fiona.ngrok-free.dev/predict",
      {
        method: "POST",
        headers: {
          "ngrok-skip-browser-warning": "true"
        },
        body: formData
      }
    );

    const data = await res.json();
    console.log(data);

    setResult(
      `${data.predicted_class} (Confidence: ${(data.confidence * 100).toFixed(2)}%)`
    );
  } catch (error) {
    console.error("Error:", error);
    alert("Prediction failed!");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="upload-wrapper">
      <div className="upload-card">
        <h2 className="upload-title">Upload Your Image</h2>

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="image-preview"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
        />

        <button
          onClick={handleGenerate}
          className="generate-btn"
          disabled={loading}
        >
          {loading ? "Processing..." : "Generate Result"}
        </button>

        {file && <p className="file-name">Selected File: {file.name}</p>}

        {result && <div className="result-box">{result}</div>}
      </div>
    </div>
  );
}

export default UploadSection;
