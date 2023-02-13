import React from "react";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
const res = await fetch(`https://fakestoreapi.com/products`);
const data = await res.json();

return {
  props : {
    data,
  }
}
}

const index = ({ data }: any) => {
  
  return (
    <>
      <Head>
        <title>new head</title>
        <meta name="description" content="Head in Next.Js" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Next.Js, ReactJs" />
        <meta name="author" content="Rohit" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
     <div>
      <h1>Fake store data</h1>
     {
        data.length>0 && data.map((el: any)=> <div key={el.id}>
          <h4>{el.id}.</h4>
          <p>{el.category}</p>
         <Link href={`/${el.id}`}> <img src={el.image} width={100} height={100} alt="" /></Link>
        </div> )
      }
     </div>
    </>
  );
};

export default index;
