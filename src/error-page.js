import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h2>OOPs!. Something went wrong</h2>
      <h3>{err.status}</h3>
    </div>
  );
};
