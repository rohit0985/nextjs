import React from 'react'

export const getStaticPaths = async()=> {
    const res = await fetch(`https://fakestoreapi.com/products`);
const data = await res.json();

const paths = data.map((el)=>{
    return {
        params : {
            id : el.id.toString(),
        }
    }
})

return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    
    return {
      props : {
        data,
      }
    }
    }

const single = ({data}) => {
  return (
    <>
      <h3>Hello dynamic</h3>
      <div>
            <h4>{data.id}.</h4>
          <p>{data.category}</p>
         <img src={data.image} width={100} height={100} alt="" />
      </div>
    </>
  )
}

export default single
