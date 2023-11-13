import React from 'react';
import Globalstyle from "./GlobalStyle";
import RoutesComponent from "./pages/routes";

function App(): JSX.Element {
  return (
    <>
      <Globalstyle />
      <RoutesComponent />
    </>
  );
}

export default App;