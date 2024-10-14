"use client"
import { creditFee } from "@/constants";
import { toast } from "@/hooks/use-toast";
import { updateCreditsAppwrite } from "@/lib/appwrite/actions/user.actions";
import { updateCreditsMongoDB } from "@/lib/mongodb/actions/user.actions";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import React, { startTransition, useEffect, useState } from "react";
import { FaImage, FaCheck } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react"
import Link from "next/link";
import Image from "next/image";
import { InsufficientCreditsModal } from "./shared/InsufficientCreditsModal";

const TextToImage = ({ userId, creditBalance }: { userId: string, creditBalance: number }) => {
    const [positiveText, setPositiveText] = useState("");
    const [negativeText, setNegativeText] = useState("Blur");
    const [width, setWidth] = useState(512);
    const [height, setHeight] = useState(512);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [downloadImage, setDownloadImage] = useState<string>('' as string);
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    useEffect(() => {
    
        (async () => {
          try {
            await fetch("/api/transformation/textToImage", {
              method: "GET",
            });
            // Handle response here if needed
            
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        })(); // Immediately invoking the async function
        
      }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (getCookie("role") == "guest" && hasCookie('guest')) {
                const data = JSON.parse(getCookie('guest')!)
                if (data.creditBalance <= 0) throw Error("Balance is low.")
            }

            const formData = {
                "positiveText": positiveText,
                "negativeText": negativeText,
                "width": width,
                "height": height
            };

            setIsLoading(true);
            const data = await fetch("/api/transformation/textToImage", {
                method: "POST",
                body: JSON.stringify(formData)
            })
            const response = await data.json()
    
            if (data.status == 200) {
                setGeneratedImage(response.result);
                setDownloadImage(response.result)
                setIsLoading(false);
                toast({
                    title: `Image transformed successfully`,
                    description: '1 credit was deducted from your',
                    duration: 5000,
                    className: 'success-toast'
    
                })
            }
            else{
                setGeneratedImage(null);
                setDownloadImage("")
                setIsLoading(false);
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
        // Get the current date and time
        const now = new Date();

        // Format the timestamp as YYYYMMDD_HHMMSS
        const timestamp = now.getFullYear() +
            ('0' + (now.getMonth() + 1)).slice(-2) +  // Months are zero-indexed
            ('0' + now.getDate()).slice(-2) + "_" +
            ('0' + now.getHours()).slice(-2) +
            ('0' + now.getMinutes()).slice(-2) +
            ('0' + now.getSeconds()).slice(-2);

        // Create a file name with the timestamp
        const fileName = `generated_image_${timestamp}.png`


        const a = document.createElement("a");

        a.href = downloadImage;


        a.download = `${fileName.replace(" ", "_")}`;
        document.body.appendChild(a);
        a.click();
    }

    return (<>

        <div className="p-6 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
            {(getCookie('role') != 'guest' && creditBalance < Math.abs(creditFee)) && <InsufficientCreditsModal />}
                <div>
                    <label htmlFor="positiveText" className="block text-sm font-semibold text-gray-700">
                        Positive Text
                    </label>
                    <input
                        type="text"
                        id="positiveText"
                        value={positiveText}
                        onChange={(e) => {
                            setPositiveText(e.target.value)
                            setIsLoading(false)
                        }}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter positive text"
                        aria-label="Enter positive text for image generation"
                    />
                </div>
                <div>
                    <label htmlFor="negativeText" className="block text-sm font-semibold text-gray-700">
                        Negative Text
                    </label>
                    <input
                        type="text"
                        id="negativeText"
                        value={negativeText}
                        onChange={(e) => {
                            setNegativeText(e.target.value)
                            setIsLoading(false)
                        }}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter negative text"
                        aria-label="Enter negative text for image generation"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="width" className="block text-sm font-semibold text-gray-700">
                            Width
                        </label>
                        <select
                            id="width"
                            value={width}
                            onChange={(e) => {
                                setWidth(Number(e.target.value))
                                setIsLoading(false)
                            }}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            aria-label="Select width for generated image"
                        >
                            <option value="256">256</option>
                            <option value="512">512</option>
                            <option value="768">768</option>
                            <option value="1024">1024</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="height" className="block text-sm font-semibold text-gray-700">
                            Height
                        </label>
                        <select
                            id="height"
                            value={height}
                            onChange={(e) => {
                                setHeight(Number(e.target.value))
                                setIsLoading(false)
                            }}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            aria-label="Select height for generated image"
                        >
                            <option value="256">256</option>
                            <option value="512">512</option>
                            <option value="768">768</option>
                            <option value="1024">1024</option>
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                        </span>
                    ) : (
                        <span className="flex items-center">
                            <FaImage className="mr-2" /> Generate Image
                        </span>
                    )}
                </button>
            </form>
            {generatedImage && (
                <div className="mt-8 transition-opacity duration-500 ease-in-out" style={{ opacity: isLoading ? 0.5 : 1 }}>
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Generated Image</h2>
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                        <Image
                            width={width}
                            height={height}
                            src={generatedImage}
                            alt="Generated from Stable Diffusion"
                            className="w-full h-auto"
                        />
                        <div className="absolute top-2 right-2 bg-green-500 text-white p-2 rounded-full">
                            <FaCheck />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:gap-4'>
                        <button
                            onClick={handleDownload}
                            className={`mt-6 w-full  py-2 px-4 rounded-md order-1 md:order-none  focus:outline-none focus:ring-2  focus:ring-offset-2  flex items-center justify-center bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-[101%]`}

                        >
                            <FiDownloadCloud className="mr-2" />
                            Download
                        </button>
                    </div>
                </div>
            )}
            <div className="mt-6 text-sm text-gray-500">
                <p className="text-gray-700 font-semibold">Preview:</p>
                <p>Positive Text: {positiveText}</p>
                <p>Negative Text: {negativeText}</p>
                <p>Dimensions: {width}x{height}</p>
            </div>
        </div>
        <Dialog open={open} handler={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Demo Credits Used: Log In for Access</DialogHeader>
            <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Your free trial has ended. To keep using our tools and services, please sign in or create an account. Sign up now to receive 15 complimentary credits and explore our platform's features further.
            </DialogBody>
            <DialogFooter placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
                    <span>Cancel</span>
                </Button>
                <Link
                    href="/sign-in"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-xs font-semibold hover:bg-indigo-700 transition uppercase duration-300 ocus:ring-2 focus:ring-offset-2"
                >
                    Login / Sign Up
                </Link>
            </DialogFooter>
        </Dialog>
    </>
    );
};

export default TextToImage;