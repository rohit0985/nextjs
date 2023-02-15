import React, { useEffect, useState } from "react";

const Page = ({ todos }) => {
  //     const [todos, setTodos] = useState([])

  //  const getData = async()=>{
  //     const res = await fetch("http://localhost:8080/todos")
  //     const data = await res.json()
  //     setTodos(data)
  //  }

  //  useEffect(()=>{
  //     getData()
  //  },[])
  return (
    <>
      <div>
        {todos.map((el) => (
          <div key={el.id}>
            {el.id}.- {el.title}
          </div>
        ))}
        
      </div>

      <style jsx>
        {`
          div {
           border: 
          }
        `}
      </style>
    </>
  );
};

export default Page;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/todos");
  const data = await res.json();

  return {
    props: {
      todos: data,
    },
  };
}
