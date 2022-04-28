import { useState } from "react";
import "./App.css";
import { Routes as Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import HomepageWrapper from "./pages/Homepage/HomepageWrapper";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import Pricingpage from "./pages/Pricing/Pricingpage";
import ContentTypePage from "./pages/ContentTypePage/ContentTypePage";
import Home from "./pages/Dashboard/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Request from "./pages/Dashboard/Request/Request";
import Company from "./pages/Dashboard/Company/Company";
import Team from "./pages/Dashboard/Team/Team";
import Settings from "./pages/Dashboard/Settings/Settings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Switch>
        {/* <Route path='/' exact element={<Home/>}> */}
        <Route path="/" exact element={<HomepageWrapper />}>
          <Route index element={<Homepage />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/pricing" exact element={<Pricingpage />} />
          <Route path="/contenttypes" exact element={<ContentTypePage />} />
          {/* 
          <Route path="/contenttypes" exact element={<ContentTypes />} />
          
          <Route path="/contentcreators" exact element={<ContentCreators />} /> */}
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="request" element={<Request />} />
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
          <Route path="settings" element={<Settings />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Switch>
    </div>
  );
}

export default App;
