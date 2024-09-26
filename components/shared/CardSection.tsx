import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
   
  type CardSectionProps={
    title:string,
    mediumDescription:string,
    images:{
      imageOne:string,
      imageTwo:string
    }
    route:string,
    icon:typeof SparklesIcon
  }
  export default function CardSection({title,mediumDescription,images,route, icon}:CardSectionProps) {
    return (
      <Card className="mt-6 w-full overflow-hidden "  placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined}>
        <CardHeader color="blue-gray" shadow={false} className="rounded-none mx-auto m-0 bg-gradient-to-r from-cyan-500 to-blue-500 justify-center flex" floated={false} placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined}>
        {" "}
              {React.createElement(icon, {
                strokeWidth: 2,
                className: "h-56 text-gray-900 stroke-pink-800 stroke-[0.5] w-56",
              })}
        </CardHeader>
        <CardBody   placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined}>
          <Typography variant="h5" color="blue-gray" className="mb-2"  placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined}>
            <Link href={route}>
            <div className="flex justify-start">
              <p className=" text-deep-purple-900 font-bold text-2xl">{title}</p>
             <ArrowRightIcon width={32}  
             className=" ml-2 stroke-purple-800" strokeWidth={2}/>
            </div>
            </Link>
          </Typography>
          <Typography className="tracking-wider"  placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined}>
            {mediumDescription}
          </Typography>
        </CardBody>
      </Card>
    );
  }