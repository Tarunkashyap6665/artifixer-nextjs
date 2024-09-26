import React from 'react'
import { FaRobot } from 'react-icons/fa'

const EmailTemplate = ({ name, email, subject, message }: { name: string, email: string, subject: string, message: string }) => {
  return (
    <div className=' border-2'>
      <div className="flex items-center justify-center gap-2 py-12 bg-gradient-to-r from-purple-900 to-indigo-900">
        <FaRobot className="text-5xl text-white" />
        <span className="text-4xl font-bold text-white italic">Artifixer</span>
      </div>
      <div className='px-3 py-4'>
        <div>
          <span className='text-lg font-semibold'>Name: </span><span className='text-base'>{"name"}</span>
        </div>
        <div>
          <span className='text-lg font-semibold'>Email: </span><span className='text-base'>{email}</span>
        </div>
        <div>
          <span className='text-lg font-semibold'>Subject: </span><span className='text-base'>{subject}</span>
        </div>
        <div>
          <span className='text-lg font-semibold'>Message: </span>
          <p className='text-base'>{message}
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmailTemplate