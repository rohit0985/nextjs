import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

  return (
   <>
     <div>
      <h2>Counter App</h2>
      <h4>Count : {count}</h4>
      <div className="btn">
      <button onClick={()=> setCount(count+1)}>Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      </div>
    </div>



    <style jsx>{`
    h2{
        color: red;
    }
    .btn{
        display: flex;
        gap: 5px;
    }
    button{
        border: 1px solid gray;
        padding: 5px;
        border-radius: 5px
    }
    `}
</style>
   </>
  )
}

export default Counter
