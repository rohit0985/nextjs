import React from 'react'
import Image from "next/image"

const newimage = () => {
  return (
    <div>
    <h1>Image</h1>

    <Image src={"https://images.unsplash.com/photo-1670272499232-d6c55af87386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} width={200} height={150}></Image>
     
     <img src="https://images.unsplash.com/photo-1670272499232-d6c55af87386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width={'100%'} alt="#" />
     
    </div>
  )
}

export default newimage
