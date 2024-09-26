"use client"
import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaSpinner } from 'react-icons/fa';
import { FiUploadCloud, FiImage, FiRotateCw, FiDownloadCloud } from 'react-icons/fi';
import { PopoverPicker } from './color-picker/PopoverPicker'; 


const BackgroundRemoval = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [transformedImage, setTransformedImage] = useState<string|null>(null);
  const [transformedImageLoading, setTransformedImageLoading] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [isModifying, setIsModifying] = useState(false)
  const [color, setColor] = useState("#bbb")
  const [downloadImage, setDownloadImage] = useState<string>('' as string)

  // reference

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const backgroundImageRef = useRef<HTMLInputElement|null>(null);


  const onDrop = useCallback((acceptedFiles: File[]) => {

    const file = acceptedFiles[0];
    setFile(file)
    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result as string; // Type assertion
      setOriginalImage(result);
      setTransformedImage(null);
      setIsModifying(false)
      // clearCanvas()
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png', '.jpg', '.gif', '.bmp'], // Use an object to specify the accept type
    },
    multiple: false,
  });

  const handleTransform = async () => {


    setTransformedImageLoading(true);
    const data = await fetch("/api/transformation/backgroundRemoval", {
      method: "POST",
      body: JSON.stringify({ image: originalImage })
    })
    const { result } = await data.json()



    setTransformedImage(result);
    setDownloadImage(result)

    setTransformedImageLoading(false);
  };
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();


    const a = document.createElement("a");

    a.href = downloadImage;

    if (file?.name && file?.name.length)
      a.download = `${file?.name.replace(" ", "_")}`;
    document.body.appendChild(a);
    a.click();
  }

  // Modify
  const [foregroundImage, setForegroundImage] = useState<HTMLImageElement | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<HTMLImageElement|null>(null);
  const [useBackgroundImage, setUseBackgroundImage] = useState(true);
  // Handle foreground image upload
  const handleForegroundUpload = (dataUrl: string) => {

    const img = new Image();
    img.src = dataUrl;


    img.onload = () => {
      setForegroundImage(img);
    };


  };


  // Handle background image upload
  const handleBackgroundUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    if (!file) return;

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === 'string') {
        img.src = result;
      }
    };

    img.onload = () => {
      setBackgroundImage(img);
    };
    reader.readAsDataURL(file);
    setUseBackgroundImage(true)
  };

  // Draw images and background on canvas
  const drawImages = (imageType: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return; 


    if (!foregroundImage) return;

    // Set canvas size to the size of the foreground image
    canvas.width = foregroundImage.width;
    canvas.height = foregroundImage.height;

    if (useBackgroundImage && backgroundImage) {
      // Draw background image
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    } else {
      // Draw background color
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Draw foreground image on top
    ctx.drawImage(foregroundImage, 0, 0, canvas.width, canvas.height);
    setDownloadImage(canvas.toDataURL(imageType))
  };


  useEffect(() => {
    if(!file) return
    if (foregroundImage) {
      drawImages(file.type); // Call drawImages whenever foregroundImage is updated
      setIsModifying(true);
    }
  }, [foregroundImage, backgroundImage]);

  useEffect(() => {
    setUseBackgroundImage(false)
    if (foregroundImage) {
      if(!file) return
      drawImages(file.type); // Call drawImages whenever foregroundImage is updated
      setIsModifying(true);
    }
  }, [color]);

  const handleModify = async () => {
    if(!transformedImage) return
    handleForegroundUpload(transformedImage)
  }


  return (
    <div className=" py-12  bg-gray-300 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          Image Upload & Transform
        </h1>
        <div className="bg-white shadow-lg rounded-lg">

          {originalImage ?


            (
              <div className="mt-2 p-6">
                <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full md:w-1/3" hidden={isModifying}>
                    <h2 className="text-lg font-semibold mb-2">Original Image</h2>
                    <img
                      src={originalImage}
                      alt="Original uploaded image"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-full md:w-1/3" >
                    <h2 className="text-lg font-semibold mb-2">Transformed Image</h2>
                    {transformedImage ? (
                      <img
                        src={transformedImage}
                        alt="Transformed image"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        {transformedImageLoading ? <FaSpinner className="animate-spin text-4xl text-blue-500" /> : <FiImage className="h-12 w-12 text-gray-400" />}

                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-1/3" hidden={!isModifying}>
                    <h2 className="text-lg font-semibold mb-2">Modify Image</h2>
                    <canvas ref={canvasRef} className="w-full h-auto rounded-lg shadow-md" hidden={!isModifying}></canvas>

                  </div>
                </div>

                {
                  transformedImage ? (
                    <>
                      <div className='flex gap-4 px-2'>
                        <button
                          onClick={handleDownload}
                          className={`mt-6 mb-3 w-1/2  py-2 px-4 rounded-md  focus:outline-none focus:ring-2  focus:ring-offset-2  flex items-center justify-center bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-[101%]`}

                        >
                          <FiDownloadCloud className="mr-2" />
                          Download
                        </button>
                        {isModifying ? (
                          <>
                            <div className='flex w-1/2 items-center justify-around '>


                              <PopoverPicker color={color} onChange={setColor} />
                              <span className='font-semibold'>OR</span>
                              <div>

                                <input type="file" onChange={handleBackgroundUpload} accept="image/*" ref={backgroundImageRef} hidden={true} />
                                <button
                                  onClick={() => backgroundImageRef?.current?.click()}
                                  className={` py-2 px-4 rounded-md  focus:outline-none focus:ring-2  focus:ring-offset-2  flex items-center justify-center bg-pink-800 text-white hover:bg-pink-900 focus:ring-pink-500 transition duration-300 ease-in-out transform hover:scale-[101%]`}>
                                  <FiUploadCloud className="mr-2" />
                                  Upload Background
                                </button>
                              </div>
                            </div>
                          </>
                        ) : (
                          <button
                            onClick={handleModify}
                            className={`mt-6 mb-3 w-1/2  py-2 px-4 rounded-md  focus:outline-none focus:ring-2  focus:ring-offset-2  flex items-center justify-center bg-yellow-800 text-white hover:bg-yellow-900 focus:ring-yellow-500 transition duration-300 ease-in-out transform hover:scale-[101%]`}>
                            <FiDownloadCloud className="mr-2" />
                            Modify Background
                          </button>

                        )}



                      </div>
                    </>
                  ) : (
                    <button
                      onClick={handleTransform}
                      className={`mt-6 mb-3 w-full  py-2 px-4 rounded-md  focus:outline-none focus:ring-2  focus:ring-offset-2  flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-[101%]`}
                      hidden={!originalImage || !!transformedImage}
                    >
                      <FiRotateCw className="mr-2" />
                      Transform Image
                    </button>
                  )
                }


                <button
                  onClick={open}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-[101%] flex items-center justify-center"

                >
                  <FiUploadCloud className="mr-2" />
                  Upload Image
                </button>
              </div>
            ) : (
              (<div
                {...getRootProps()}
                className={`p-6 border-dashed border-2 ${isDragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'} rounded-lg text-center grid place-content-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 h-[40vh] `}
              >
                <div className=' h-fit'>

                  <input {...getInputProps()} />
                  <FiUploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Drag 'n' drop an image here, or click to select one
                  </p>
                </div>
              </div>)
            )}
        </div>
      </div>

    </div>
  );
};

export default BackgroundRemoval;