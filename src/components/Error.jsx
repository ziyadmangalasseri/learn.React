import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops!!..</h1>
      <h2>Somthing went wrong!!</h2>
      <h3>{err.status} {err.statusText}</h3>
    </div>
  );
};
