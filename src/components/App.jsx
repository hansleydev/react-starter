// ------------------- Import Required Modules -------------------

import React from "react";
import { StylesProvider } from "@material-ui/styles";

// ------------------- Import Context & Provider -------------------

// ------------------- Import Theme -------------------

// ------------------- Import Custom Components -------------------

// ------------------- Create Main App Component -------------------

const App = () => {
  return (
    <StylesProvider injectFirst>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h1>React Starter</h1>
      </div>
    </StylesProvider>
  );
};

export default App;
