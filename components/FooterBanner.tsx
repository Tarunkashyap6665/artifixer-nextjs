import Link from 'next/link'
import React from 'react'

const FooterBanner = () => {
    return (
        <div className=" mx-auto py-12 bg-gradient-to-br from-purple-100 to-indigo-200">


            <section className="text-center my-12 ">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Ready to transform your images?
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                    Sign up now and get access to all our AI-powered image tools!
                </p>
                <Link
                    href="/sign-up"
                    className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
                >
                    Sign Up
                </Link>
            </section>
        </div>
    )
}

export default FooterBanner