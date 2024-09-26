"use client"
import React, { useState, useRef, useEffect } from 'react';
import { FaUpload, FaUndo, FaRedo, FaSave, FaShareAlt, FaSpinner } from 'react-icons/fa';
import { MdRotateRight, MdCrop, MdFilterVintage } from 'react-icons/md';
import { RiZoomInLine } from 'react-icons/ri';

const ImageTransformer = () => {
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [transformedImage, setTransformedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [transformations, setTransformations] = useState([]);
    const [currentTransformIndex, setCurrentTransformIndex] = useState(-1);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const dropZoneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dropZone = dropZoneRef.current;
        if (!dropZone) return;
        const handleDragOver = (e: DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.add('border-blue-500');
        };
        const handleDragLeave = (e: DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.remove('border-blue-500');
        };
        const handleDrop = (e: DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.remove('border-blue-500');
            if (!e.dataTransfer) return;
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleImageUpload(e.dataTransfer.files[0]);
            }
        };

        dropZone.addEventListener('dragover', handleDragOver);
        dropZone.addEventListener('dragleave', handleDragLeave);
        dropZone.addEventListener('drop', handleDrop);

        return () => {
            dropZone.removeEventListener('dragover', handleDragOver);
            dropZone.removeEventListener('dragleave', handleDragLeave);
            dropZone.removeEventListener('drop', handleDrop);
        };
    }, []);

    const handleImageUpload = (file:File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target?.result as string; // Type assertion
            setOriginalImage(result);
            setTransformedImage(null);
            setTransformations([]);
            setCurrentTransformIndex(-1);
        };
        reader.readAsDataURL(file);
    };

    const applyTransformation = (type:string, value:number|string|object) => {
        setIsLoading(true);
        setTimeout(() => {
            const newTransformations = [...transformations.slice(0, currentTransformIndex + 1), { type, value }];
            setTransformations(newTransformations);
            setCurrentTransformIndex(newTransformations.length - 1);
            setTransformedImage(`${originalImage}#transform-${Date.now()}`);
            setIsLoading(false);
        }, 1000);
    };

    const handleUndo = () => {
        if (currentTransformIndex > -1) {
            setCurrentTransformIndex(currentTransformIndex - 1);
            setTransformedImage(`${originalImage}#undo-${Date.now()}`);
        }
    };

    const handleRedo = () => {
        if (currentTransformIndex < transformations.length - 1) {
            setCurrentTransformIndex(currentTransformIndex + 1);
            setTransformedImage(`${originalImage}#redo-${Date.now()}`);
        }
    };

    const handleSave = () => {
        const link = document.createElement('a');
        link.href = transformedImage || originalImage;
        link.download = 'transformed_image.png';
        link.click();
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Transformed Image',
                text: 'Check out my transformed image!',
                url: transformedImage || originalImage,
            }).then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            alert('Web Share API is not supported in your browser');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Image Transformer</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <div
                        ref={dropZoneRef}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => fileInputRef.current.click()}
                        onKeyPress={(e) => e.key === 'Enter' && fileInputRef.current.click()}
                        tabIndex="0"
                        role="button"
                        aria-label="Upload image"
                    >
                        {originalImage ? (
                            <img src={originalImage} alt="Original" className="max-w-full h-auto mx-auto" />
                        ) : (
                            <div>
                                <FaUpload className="mx-auto text-4xl text-gray-400 mb-2" />
                                <p>Drag & Drop or Click to Upload Image</p>
                            </div>
                        )}
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={(e) => handleImageUpload(e.target.files[0])}
                        accept="image/*"
                    />
                </div>
                <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg p-4 h-full flex items-center justify-center">
                        {isLoading ? (
                            <FaSpinner className="animate-spin text-4xl text-blue-500" />
                        ) : transformedImage ? (
                            <img src={transformedImage} alt="Transformed" className="max-w-full h-auto" />
                        ) : (
                            <p className="text-gray-500">Transformed image will appear here</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
                    onClick={() => applyTransformation('rotate', 90)}
                    disabled={!originalImage}
                >
                    <MdRotateRight /> Rotate
                </button>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300"
                    onClick={() => applyTransformation('resize', 0.8)}
                    disabled={!originalImage}
                >
                    <RiZoomInLine /> Resize
                </button>
                <button
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-300"
                    onClick={() => applyTransformation('filter', 'sepia')}
                    disabled={!originalImage}
                >
                    <MdFilterVintage /> Filter
                </button>
                <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-300"
                    onClick={() => applyTransformation('crop', { width: 200, height: 200 })}
                    disabled={!originalImage}
                >
                    <MdCrop /> Crop
                </button>
            </div>
            <div className="mt-4 flex justify-center gap-4">
                <button
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-300"
                    onClick={handleUndo}
                    disabled={currentTransformIndex === -1}
                >
                    <FaUndo /> Undo
                </button>
                <button
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-300"
                    onClick={handleRedo}
                    disabled={currentTransformIndex === transformations.length - 1}
                >
                    <FaRedo /> Redo
                </button>
                <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300"
                    onClick={handleSave}
                    disabled={!transformedImage}
                >
                    <FaSave /> Save
                </button>
                <button
                    className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-colors duration-300"
                    onClick={handleShare}
                    disabled={!transformedImage}
                >
                    <FaShareAlt /> Share
                </button>
            </div>
        </div>
    );
};

export default ImageTransformer;