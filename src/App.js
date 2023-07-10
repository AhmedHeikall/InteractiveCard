import React from "react";
import { useSelector } from "react-redux";

import Leftside from "./components/Leftside/Leftside";
import Form from "./components/Rightside/Form";
import Complete from "./components/Rightside/Complete";

function App() {
  const confirmed = useSelector((state) => state.confirm.confirmed);
  return (
    <main>
      <Leftside />
      {!confirmed && <Form />}
      {confirmed && <Complete />}
    </main>
  );
}

export default App;
