import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import getOrCreateDB from "./lib/appwrite/database/dbSetup";
import { cookies } from "next/headers";

const isProtectedRoute = createRouteMatcher(["/transformations(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  await getOrCreateDB();
  if(cookies().has('guest')){

    const data = cookies().get('guest')?.value
    const user= JSON.parse(data!)

  
    if (user.creditBalance<=0 && isProtectedRoute(req)) auth().protect();
  }

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
