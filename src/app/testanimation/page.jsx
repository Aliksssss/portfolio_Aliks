"use client"

import React from 'react'

import {motion} from "framer-motion" 


function TestPage() {
  return (
    <div className='flex align-center justify-center h-full'>
      <motion.div className='w-96 h-96 bg-red-400 rounded'  initial={{x:-100}} animate={{x:100}}>

      </motion.div>
    </div>
  )
}

export default TestPage
