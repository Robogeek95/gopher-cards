import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Index from "./pages/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  </ChakraProvider>
);
