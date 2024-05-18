import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className="error-page d-flex flex-column align-items-center text-center justify-content-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
