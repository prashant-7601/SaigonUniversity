import { createBrowserRouter } from "react-router-dom";
import { Root } from "../../routes/Root";
import { ErrorPage } from "../../error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
]);
