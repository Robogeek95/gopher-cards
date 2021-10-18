import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Index from "./pages/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Module from "./pages/Module";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>

        <Route path="/:module">
          <Module />
        </Route>
      </Switch>
    </Router>
  </ChakraProvider>
);
