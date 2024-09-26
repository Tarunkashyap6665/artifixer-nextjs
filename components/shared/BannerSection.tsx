"use client"
import Image from 'next/image';
import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { cn } from '@/lib/utils';
type BannerSectionSectionProps = {
  label: string,
  title: string,
  description: string,
  imageOne: string,
  imageTwo: string,
  reverse: boolean,
  backgroundColor:string
}

const BannerSection = ({ label, title, description, imageOne, imageTwo, reverse,backgroundColor, ...res }: BannerSectionSectionProps) => {
  return (
    <section className={cn(' lg:h-[92vh] flex items-center bg-gradient-to-r from-purple-600 to-indigo-600',backgroundColor)} >

      <Card className={`w-full shadow-none bg-blue-gray-50/5 overflow-hidden sm:h-[60vh] lg:h-[80%] mx-4 my-4 rounded-md  ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex-col `} placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined} >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 sm:w-1/2 w-full h-[45vh] sm:h-full  shrink-0 rounded-none" placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined}      >

          <ReactCompareSlider className="w-full h-full mx-auto object-cover"
            itemOne={<ReactCompareSliderImage src="..." srcSet={imageOne} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="..." srcSet={imageTwo} alt="Image two" />}
          />
        </CardHeader>
        <CardBody  placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined}>
          <Typography variant="h1" color="gray" className="mb-4 uppercase font-IBMPlex text-white" placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined} >
            {label}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2" placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined}>
            {title}
          </Typography>
          <Typography  className="mb-8 font-IBMPlex font-medium tracking-wider text-gray-200" placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined}>
            {description}
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2" placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined}>
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    </section>
  );
}

export default BannerSection;