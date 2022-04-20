import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes as Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import HomepageWrapper from "./pages/Homepage/HomepageWrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Switch>
        {/* <Route path='/' exact element={<Home/>}> */}
        <Route path="/" exact element={<HomepageWrapper />}>
          <Route index element={<Homepage />} />
          {/* <Route path="/pricing" exact element={<Pricingpage />} />
          <Route path="/contenttypes" exact element={<ContentTypes />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/contentcreators" exact element={<ContentCreators />} /> */}
        </Route>
        {/* <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} /> */}
      </Switch>
    </div>
  );
}

export default App;
