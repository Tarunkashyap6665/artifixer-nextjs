import React from 'react'
import CardSection from './CardSection'

type AIToolsSectionProps={
    label:string,
    description:string
    subItems:SubItemsProps[]
}
const AIToolsSection = ({label,description,subItems}:AIToolsSectionProps) => {
  return (
<section className="bg-gradient-to-r from-blue-200 to-cyan-200">
    <div className='flex flex-col drop-shadow-md justify-center max-w-6xl min-h-screen py-10 mx-auto sm:px-6 '>

    
    <div className="flex flex-col  items-center justify-center mb-8">
        <h2 className="text-3xl font-bold leading-none md:text-4xl">
            {label}
        </h2>
        <p className='mt-2 text-xl text-center text-gray-700 font-semibold tracking-wide'>{description}</p>
        
        
    </div>

    <div className='grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6'>
        {subItems.map((item)=>(

        <CardSection title={item.title} mediumDescription={item.mediumDescription} icon={item.icon} images={item.images} route={item.route} />
        ))}
    </div>
    </div>
</section>
  )
}

export default AIToolsSection