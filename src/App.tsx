import React from "react";
import * as C from "./stylesGlobal/appStyles";
import AppRoutes from "./route/AppRoutes";
const App = () => {
  return (
    <C.Container>
      <AppRoutes />
    </C.Container>
  );
};

export default App;
