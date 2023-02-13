import React, { useEffect } from 'react'
import Link from "next/link"
import {useRouter} from "next/router"
import Navbar from '../Components/Navbar'

const ErrorPage = () => {
    const router = useRouter()

    const handleGoBack = () => {
       router.push("/")
    }

    useEffect(()=>{
        setTimeout(() => {
            console.log("hello")
            router.push("/")
        },2000);
        // router.push("/")
    },[])
    
  return (
    <div>
    <Navbar/>
      <h3>Status 404</h3>
      <p>Something went wrong</p>
      <Link href={"/"}><button>Home</button></Link>
      <button onClick={()=> router.push("/")}>router.push</button>
      <button onClick={handleGoBack}>router.push</button>
    </div>
  )
}

export default ErrorPage
