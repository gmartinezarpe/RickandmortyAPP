import React from "react";

const Page = ({ setPageNumber }) => {
  let next = () => {
    setPageNumber((x)=> x + 1);
  };

  let prev = () => {
    setPageNumber((x) => x - 1);
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={prev} className="btn btn-primary">
        prev
      </button>
      <button onClick={next} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default Page;
