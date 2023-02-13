import React from "react";

const newstyle = () => {
  return (
    <>
      <div>
        <h1>New way (Next.js way) of styling</h1>
        <p className="text">This is the new way of writing internal css</p>
      </div>

      <style jsx>
        {`
          h1 {
            color: red;
            font-style: italic;
          }
          .text {
            color: blue;
          }
        `}
      </style>
    </>
  );
};

export default newstyle;
