"use client"
import React from 'react'

function page({params}) {   // there must be params
    console.log(params.lecture[1]);  // we can access the segments of the url 

  return (
    <div>page</div>
  )
}

export default page