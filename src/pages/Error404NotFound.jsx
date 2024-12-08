import { useLocation } from "react-router-dom";

const Error404NotFound = () => {
  const location = useLocation();
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>
        Sorry, the page: {location.pathname} you are looking for does not exist{" "}
      </p>
    </div>
  );
};

export default Error404NotFound;
