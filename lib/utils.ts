/* eslint-disable prefer-const */
/* eslint-disable no-prototype-builtins */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "qs";

import { aspectRatioOptions } from "@/constants";
import { ID } from "node-appwrite";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

// PLACEHOLDER LOADER - while image is transforming
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#7986AC" offset="20%" />
      <stop stop-color="#68769e" offset="50%" />
      <stop stop-color="#7986AC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#7986AC" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const dataUrl = `data:image/svg+xml;base64,${toBase64(
  shimmer(1000, 1000)
)}`;
// ==== End

// FORM URL QUERY
export const formUrlQuery = ({
  searchParams,
  key,
  value,
}: FormUrlQueryParams) => {
  const params = { ...qs.parse(searchParams.toString()), [key]: value };

  return `${window.location.pathname}?${qs.stringify(params, {
    skipNulls: true,
  })}`;
};

// REMOVE KEY FROM QUERY
export function removeKeysFromQuery({
  searchParams,
  keysToRemove,
}: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(searchParams);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  // Remove null or undefined values
  Object.keys(currentUrl).forEach(
    (key) => currentUrl[key] == null && delete currentUrl[key]
  );

  return `${window.location.pathname}?${qs.stringify(currentUrl)}`;
}

// DEBOUNCE
export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null; // Ensure proper initialization
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay); // Use spread operator
  };
};


// GE IMAGE SIZE
export type AspectRatioKey = keyof typeof aspectRatioOptions;
export const getImageSize = (
  type: string,
  image: any,
  dimension: "width" | "height"
): number => {
  if (type === "fill") {
    return (
      aspectRatioOptions[image.aspectRatio as AspectRatioKey]?.[dimension] ||
      1000
    );
  }
  return image?.[dimension] || 1000;
};

// DOWNLOAD IMAGE
export const download = (url: string|null, filename: string,type:string) => {
  if (!url) {
    throw new Error("Resource URL not provided! You need to provide one");
  }

  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;

      if (filename && filename.length)
        a.download = `${type}_${filename.replace(" ", "_")}`;
      document.body.appendChild(a);
      a.click();
    })
    .catch((error) => console.log({ error }));
};

// DEEP MERGE OBJECTS
export const deepMergeObjects = (obj1: any, obj2: any) => {
  if(obj2 === null || obj2 === undefined) {
    return obj1;
  }

  let output = { ...obj2 };

  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (
        obj1[key] &&
        typeof obj1[key] === "object" &&
        obj2[key] &&
        typeof obj2[key] === "object"
      ) {
        output[key] = deepMergeObjects(obj1[key], obj2[key]);
      } else {
        output[key] = obj1[key];
      }
    }
  }

  return output;
};


// Random user generator

function getRandomElement(arr:string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomEmail(firstName:string, lastName:string) {
  const domains = ["example.com", "mail.com", "webmail.com"];
  const domain = getRandomElement(domains);
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
}

export function generateRandomUserData() {
  const firstNames = ["John", "Jane", "Alex", "Emily", "Michael", "Sarah", "David", "Laura"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia"];
  
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  const username = `${firstName.toLowerCase()}_${lastName.toLowerCase()}_${Math.floor(Math.random() * 1000)}`;
  const email = generateRandomEmail(firstName, lastName);
  
  return {
      clerkId: ID.unique(), // Assuming ID.unique() generates a unique identifier
      email: email,
      username: username,
      photo: "", // You can assign a placeholder URL for a photo if needed
      firstName: firstName,
      lastName: lastName,
      planId: 0,
      creditBalance: 2,
      role: "guest"
  };
}



export const formSchema = z.object({
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string(),
})