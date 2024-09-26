import React, { useState, useRef } from 'react';

const AddBackground = () => {
  const [foregroundImage, setForegroundImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default color
  const [useBackgroundImage, setUseBackgroundImage] = useState(true); // Default to image
  const canvasRef = useRef(null);

  // Handle foreground image upload
  const handleForegroundUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target.result;
    };

    img.onload = () => {
      setForegroundImage(img);
    };

    reader.readAsDataURL(file);
  };

  // Handle background image upload
  const handleBackgroundUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target.result;
    };

    img.onload = () => {
      setBackgroundImage(img);
    };

    reader.readAsDataURL(file);
  };

  // Handle background color change
  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  // Draw images and background on canvas
  const drawImages = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!foregroundImage) return;

    // Set canvas size to the size of the foreground image
    canvas.width = foregroundImage.width;
    canvas.height = foregroundImage.height;

    if (useBackgroundImage && backgroundImage) {
      // Draw background image
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    } else {
      // Draw background color
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Draw foreground image on top
    ctx.drawImage(foregroundImage, 0, 0, canvas.width, canvas.height);
  };

  // Download the image
  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'image_with_background.png';
    link.click();
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Image Background Editor</h2>

      {/* Upload foreground image */}
      <div>
        <label>Upload Foreground (Transparent) Image: </label>
        <input type="file" onChange={handleForegroundUpload} accept="image/*" />
      </div>
      <br />

      {/* Background option selection */}
      <div>
        <label>
          <input
            type="radio"
            name="backgroundOption"
            value="image"
            checked={useBackgroundImage}
            onChange={() => setUseBackgroundImage(true)}
          />
          Use Background Image
        </label>
        <label style={{ marginLeft: '20px' }}>
          <input
            type="radio"
            name="backgroundOption"
            value="color"
            checked={!useBackgroundImage}
            onChange={() => setUseBackgroundImage(false)}
          />
          Use Background Color
        </label>
      </div>
      <br />

      {/* Conditionally show background image or color options */}
      {useBackgroundImage ? (
        <div>
          <label>Upload Background Image: </label>
          <input type="file" onChange={handleBackgroundUpload} accept="image/*" />
        </div>
      ) : (
        <div>
          <label>Pick Background Color: </label>
          <input type="color" value={backgroundColor} onChange={handleBackgroundColorChange} />
        </div>
      )}
      <br />

      <canvas ref={canvasRef} style={{ border: '1px solid #000' }}></canvas>
      <br /><br />

      {foregroundImage && (
        <>
          <button onClick={drawImages}>Apply Background</button>
          <button onClick={downloadImage} style={{ marginLeft: '10px' }}>
            Download Image
          </button>
        </>
      )}
    </div>
  );
};

export default AddBackground;
