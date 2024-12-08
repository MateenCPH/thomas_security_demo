import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const BadComponent = () => {
  throw new Error("Component failed to render");
};

const ErrorProvoker = () => {
  const { setErrorMessage } = useOutletContext();
  const [ showBadComponent, setShowBadComponent ] = useState(false);

  const handleClick = () => {
    try {
      //Indsæt kode for knap som du tror kan fejle
      throw new Error("This is a JavaScript error");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleHttpError = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/404");
    if (!response.ok) {
      try {
        throw new Error("HTTP error, status = " + response.status);
      } catch (error) {
        setErrorMessage(error.message);
      }
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Provoke JS error</button>
      <button onClick={handleHttpError}>Provoke HTTP error</button>
      <button onClick={() => setShowBadComponent(!showBadComponent)}>Bad component</button>
      {showBadComponent && <BadComponent />}
    </div>
  );
};

export default ErrorProvoker;
