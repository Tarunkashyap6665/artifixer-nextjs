import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaUpload } from "react-icons/fa";

const ImageResizingTool = () => {
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [unit, setUnit] = useState("px");
  const [aspectRatio, setAspectRatio] = useState(1);
  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setImage(img);
        setWidth(img.width);
        setHeight(img.height);
        setAspectRatio(img.width / img.height);
      };
      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    if (maintainAspectRatio && image) {
      if (width && !isNaN(width)) {
        setHeight(Math.round(width / aspectRatio));
      } else if (height && !isNaN(height)) {
        setWidth(Math.round(height * aspectRatio));
      }
    }
  }, [width, height, maintainAspectRatio, aspectRatio, image]);

  const handleWidthChange = (e) => {
    const value = e.target.value;
    setWidth(value);
    setError("");
  };

  const handleHeightChange = (e) => {
    const value = e.target.value;
    setHeight(value);
    setError("");
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const validateInput = () => {
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
      setError("Please enter valid positive numbers for width and height.");
      return false;
    }
    return true;
  };

  const getConvertedSize = (size) => {
    switch (unit) {
      case "in":
        return size / 96;
      case "cm":
        return size / 37.8;
      case "mm":
        return size / 3.78;
      default:
        return size;
    }
  };


  useEffect(() => {
    console.log("fakhfka")
   
  }, [unit])
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Image Resizing Tool</h1>
      
      <div {...getRootProps()} className="mb-6">
        <input {...getInputProps()} aria-label="Drag and drop image upload area" />
        <div className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition duration-300 ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`}>
          <FaUpload className="mx-auto text-4xl mb-4 text-gray-400" />
          <p className="text-lg text-gray-600">
            {isDragActive ? "Drop the image here" : "Drag 'n' drop an image here, or click to select one"}
          </p>
        </div>
      </div>

      {image && (
        <div className="mb-6">
          <img
            src={image.src}
            alt="Uploaded image"
            style={{ width: getConvertedSize(width), height: getConvertedSize(height) }}
            className="mx-auto border rounded-lg shadow-md transition-all duration-300"
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Width</label>
          <input
            type="number"
            id="width"
            value={width}
            onChange={handleWidthChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Width input"
          />
        </div>
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">Height</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={handleHeightChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Height input"
          />
        </div>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="aspectRatio"
          checked={maintainAspectRatio}
          onChange={() => setMaintainAspectRatio(!maintainAspectRatio)}
          className="mr-2"
          aria-label="Maintain aspect ratio checkbox"
        />
        <label htmlFor="aspectRatio" className="text-sm text-gray-700">Maintain aspect ratio</label>
      </div>

      <div className="mb-4">
        <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
        <select
          id="unit"
          value={unit}
          onChange={handleUnitChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Unit selection dropdown"
        >
          <option value="px">Pixels (px)</option>
          <option value="in">Inches (in)</option>
          <option value="cm">Centimeters (cm)</option>
          <option value="mm">Millimeters (mm)</option>
        </select>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        onClick={validateInput}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Resize image button"
      >
        Resize Image
      </button>
    </div>
  );
};

export default ImageResizingTool;