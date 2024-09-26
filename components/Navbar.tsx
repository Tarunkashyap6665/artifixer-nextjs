"use client"
import React, { useState } from "react";
import { FaRobot, FaImage, FaFileAlt, FaVideo, FaTools, FaUserCircle } from "react-icons/fa";
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navLinks } from "@/constants";


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


const Navbar5 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    const tools = [
        { icon: <FaImage />, name: "Image Editor", description: "Edit and enhance your images" },
        { icon: <FaFileAlt />, name: "Document Processor", description: "Process and analyze text documents" },
        { icon: <FaVideo />, name: "Video Producer", description: "Create and edit stunning videos" },
        { icon: <FaTools />, name: "Other Tools", description: "Explore more AI-powered tools" },
    ];

    return (
        <>
            <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span className="text-white text-2xl font-bold italic">
                                    <FaRobot className="inline-block mr-2" />
                                    Artifixer
                                </span>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">

                                <NavigationMenu>
                                    <NavigationMenuList>

                                        {navLinks.map((link, key) => (
                                            link.isMegaMenu ? (
                                                // <MegaMenu label={link.label} menuItems={link.subItems!} key={key} />
                                                <NavigationMenuItem key={key}>
                                                    <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                                                    <NavigationMenuContent>
                                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                            {link.subItems?.map((component) => (
                                                                <ListItem
                                                                    key={component.title}
                                                                    title={component.title}
                                                                    href={component.route}
                                                                >
                                                                    {component.description}
                                                                </ListItem>
                                                            ))}
                                                        </ul>
                                                    </NavigationMenuContent>
                                                </NavigationMenuItem>
                                            ) : (
                                                <NavigationMenuItem>
                                                    <Link href={link.route} legacyBehavior passHref>
                                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                            {link.label}
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </NavigationMenuItem>
                                            )
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>


                            </div>
                        </div>
                        <div className="hidden md:block">
                            <button className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <FaUserCircle className="inline-block mr-2" />
                                Login / Signup
                            </button>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium">Tools</a>
                            <a href="#" className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
                            <a href="#" className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
                            <a href="#" className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                            <button className="w-full text-left bg-white text-indigo-600 px-4 py-2 rounded-md text-base font-medium hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <FaUserCircle className="inline-block mr-2" />
                                Login / Signup
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {isMegaMenuOpen && (
                <div className="absolute z-10 inset-x-0 transform shadow-lg">
                    <div className="bg-white">
                        <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                            {tools.map((tool, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                                >
                                    <div className="flex md:h-full lg:flex-col">
                                        <div className="flex-shrink-0">
                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white sm:h-12 sm:w-12">
                                                {tool.icon}
                                            </span>
                                        </div>
                                        <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                            <div>
                                                <p className="text-base font-medium text-gray-900">{tool.name}</p>
                                                <p className="mt-1 text-sm text-gray-500">{tool.description}</p>
                                            </div>
                                            <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">Learn more <span aria-hidden="true">&rarr;</span></p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* Your main content goes here */}
            </main>
            {/* 
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <span className="text-2xl font-bold italic">
                <FaRobot className="inline-block mr-2" />
                Artifixer
              </span>
              <p className="text-gray-400 text-base">
                Empowering creativity with AI-powered tools for image editing, document processing, and video production.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Image Editor</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Document Processor</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Video Producer</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Other Tools</a></li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Pricing</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Documentation</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Guides</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">API Status</a></li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">About</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Blog</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Jobs</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Press</a></li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Cookie Policy</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Licenses</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2023 Artifixer. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
        </>
    );
};

export default Navbar5;