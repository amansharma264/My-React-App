const ErrorExample = () => {

  let setCount = 0;

  const handleClick = () =>{
    setCount(setCount + 1);
    console.log(setCount);
    
  }
  return <div>
    <h2>{setCount}</h2>
    <button type="button" onClick={handleClick} className="btn">increase</button>
  </div>;
};

export default ErrorExample;
