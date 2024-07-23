import * as ReactRouter from "react-router-dom";

import { Editor } from "~/Editor";
import { Generation } from "~/Generation";
import { Plugin } from "~/Plugin";

export function Router() {
  const navigate = Router.useNavigate();
  const settings = Plugin.use(({ settings }) => settings ?? {});

  useEffect(() => {
    0;
  }, [navigate, settings]);

  return <Router.Routes />;
}

export namespace Router {
  export type Route = string;

  export function Routes() {
    return ReactRouter.useRoutes(
      Routes.use() as Mutable<ReturnType<typeof Routes.use>>
    );
  }

  export namespace Routes {
    export function use() {
      return useMemo(
        () =>
          [
            {
              path: "/generate",
              element: <Generation />,
            },
            {
              path: "/edit",
              element: <Editor />,
            },
            {
              path: "*",
              element: <ReactRouter.Navigate to={`/generate`} replace />,
            },
          ] as const,
        []
      );
    }
  }

  export const useNavigate = ReactRouter.useNavigate;
  export const useLocation = ReactRouter.useLocation;

  export const Provider = ReactRouter.BrowserRouter;
}
