"use client"
import React, { useState, useCallback, useContext, startTransition, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaSpinner } from 'react-icons/fa';
import { FiUploadCloud, FiImage, FiRotateCw, FiDownloadCloud } from 'react-icons/fi';
import { ImageContext } from './shared/context/ImageProvider';
import DragAndDrop from './shared/DragAndDrop';
import { toast } from '@/hooks/use-toast';
import Img from 'next/image';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { updateCreditsAppwrite } from '@/lib/appwrite/actions/user.actions';
import { updateCreditsMongoDB } from '@/lib/mongodb/actions/user.actions';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react"
import { creditFee } from '@/constants';
import Link from 'next/link';
import { InsufficientCreditsModal } from './shared/InsufficientCreditsModal';


const EnhanceImage = ({ userId, creditBalance }: { userId: string, creditBalance: number }) => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [transformedImage, setTransformedImage] = useState<string | null>(null);
  const [transformedImageLoading, setTransformedImageLoading] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [downloadImage, setDownloadImage] = useState<string>('' as string)
  const imageContext = useContext(ImageContext)
  const [openDailog, setOpenDailog] = useState(false);
  const handleOpen = () => setOpenDailog(!openDailog);

  useEffect(() => {
    
    (async () => {
      try {
        await fetch("/api/transformation/imageEnhancer", {
          method: "GET",
        });
        // Handle response here if needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })(); // Immediately invoking the async function
    
  }, [])
  


  const onDrop = useCallback((acceptedFiles: File[]) => {

    const file = acceptedFiles[0];
    setFile(file)
    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result as string; // Type assertion
      setOriginalImage(result);
      setTransformedImage(null);
      setTransformedImageLoading(false)
    };

    reader.readAsDataURL(file);
  }, []);

  const { open } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png', '.jpg', '.gif', '.bmp'], // Use an object to specify the accept type
    },
    multiple: false,
  });

  const handleTransform = async () => {


    try {
      if (getCookie("role") == "guest" && hasCookie('guest')) {
        const data = JSON.parse(getCookie('guest')!)
        if (data.creditBalance <= 0) throw Error("Balance is low.")
      }

      setTransformedImageLoading(true);
      const data = await fetch("/api/transformation/imageEnhancer", {
        method: "POST",
        body: JSON.stringify({ image: originalImage, fileName: file?.name })
      })
      const response = await data.json()
  
      if (data.status == 200) {
        setTransformedImage(response.result);
        setDownloadImage(response.result)
        imageContext?.setImage(response.result)
        setTransformedImageLoading(false);
        toast({
          title: `Image transformed successfully`,
          description: '1 credit was deducted from your',
          duration: 5000,
          className: 'success-toast'
  
        })
  
      }
      else{
        setTransformedImage(null);
        setDownloadImage("")
        imageContext?.setImage("")
        setTransformedImageLoading(false);
        toast({
          title: `${response.title}`,
          description: `${response.result}`,
          duration: 5000,
          className: 'error-toast'
  
        })
      }

      
    } catch (error) {
      console.log(error)
    }

    startTransition(async () => {
      if (hasCookie('role') && getCookie('role') == 'guest') {
        const data = getCookie('guest')
        if (!data) return
        const userData = JSON.parse(data)

        if (userData.creditBalance > 0) {

          const updatedUserCredit = {
            ...userData,
            creditBalance: userData.creditBalance + creditFee
          }

          setCookie('guest', updatedUserCredit)
        }
        else {
          handleOpen()
        }


      }
      else {
        try {

          await updateCreditsAppwrite(userId, creditFee)
        } catch (error) {

          await updateCreditsMongoDB(userId, creditFee)
        }
      }

    })

   

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

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg">
        {(getCookie('role') != 'guest' && creditBalance < Math.abs(creditFee)) && <InsufficientCreditsModal />}

        {originalImage ?


          (
            <div className="mt-2 p-6">
              <div className="flex flex-col md:flex-row justify-around  space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/2">
                  <h2 className="text-lg font-semibold mb-2">Original Image</h2>
                  <Img
                    src={originalImage}
                    width={100}
                    height={100}
                    alt="Original uploaded image"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2 grid" >
                  <h2 className="text-lg font-semibold mb-2">Transformed Image</h2>
                  {transformedImage ? (
                    <Img
                      src={transformedImage}
                      width={100}
                      height={100}
                      alt="Transformed image"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                      {transformedImageLoading ? <FaSpinner className="animate-spin text-4xl text-blue-500" /> : <FiImage className="h-12 w-12 text-gray-400" />}

                    </div>
                  )}
                </div>

              </div>

              {
                transformedImage ? (
                  <>
                    <div className='flex flex-col md:flex-row md:gap-4'>
                      <button
                        onClick={handleDownload}
                        className={`md:mt-6 mb-3 w-full  py-2 px-4 rounded-md order-1 md:order-none  focus:outline-none focus:ring-2  focus:ring-offset-2  flex items-center justify-center bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-[101%]`}

                      >
                        <FiDownloadCloud className="mr-2" />
                        Download
                      </button>



                    </div>
                  </>
                ) : (
                  <button
                    onClick={handleTransform}
                    className={`mt-6 mb-3 w-full  py-2 px-4 rounded-md  focus:outline-none focus:ring-2  focus:ring-offset-2  flex items-center justify-center ${transformedImageLoading ? 'bg-blue-200 text-gray-200' : ' bg-blue-600 transition duration-300 ease-in-out transform hover:scale-[101%] text-white hover:bg-blue-700 focus:ring-blue-500'}`} disabled={transformedImageLoading}
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
            (
              <DragAndDrop onDrop={onDrop} />
            )
          )}
      </div>
      <Dialog open={openDailog} handler={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Demo Credits Used: Log In for Access</DialogHeader>
        <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Your free trial has ended. To keep using our tools and services, please sign in or create an account. Sign up now to receive 15 complimentary credits and explore our platform's features further.
        </DialogBody>
        <DialogFooter placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
            <span>Cancel</span>
          </Button>
          <Link
            href="/sign-in"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-xs font-semibold hover:bg-indigo-700 transition uppercase duration-300"
          >
            Login / Sign Up
          </Link>
        </DialogFooter>
      </Dialog>
    </>

  );
};

export default EnhanceImage;