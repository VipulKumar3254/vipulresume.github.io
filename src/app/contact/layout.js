"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

function Layout({children}) {
    const router = useRouter();
    const pathName = usePathname();
    const raj=()=>{

        router.push("/contact/generalQuery")
    }
  return (
    <>
    <div className="">
    <Link href="/contact/hireMe">Hire Me</Link> <br />
    <button onClick={raj}>General Query</button>
    {
        pathName =="/contact/hireMe" && "Ha ab sahi hai " 
    }
    </div>
        {children}
    </>
  )
}

export default Layout