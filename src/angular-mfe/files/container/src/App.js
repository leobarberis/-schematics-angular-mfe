import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Progress from "./components/Progress";
import useNavigation from "./services/useNavigation";

const history = createBrowserHistory({ basename: "/obe/" });
const <%= classify(name) %>Lazy = lazy(() => import("./components/Wrapper"));

export default ({ pathname: nextPathname }) => {
  useNavigation(history, nextPathname);
  return (
    <Router history={history}>
      <Suspense fallback={<Progress />}>
        <ErrorBoundary>
          <Switch>
            <Route path="/<%= name %>" component={<%= classify(name) %>Lazy} />
          </Switch>
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
};
