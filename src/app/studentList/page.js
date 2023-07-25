"use client"
import Link from "next/link"


function Page() {
    const arr = ["arrav","vipul","ashish","manshi"]


  return (
    <>
    <h1>hi</h1>
    {
        arr.map( element=>(<Link href={`/studentList/${element}`} >{element}</Link>))
    }
    </>
  )
}

export default Page