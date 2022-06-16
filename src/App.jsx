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
import NewRequest from "./pages/Dashboard/NewRequest/NewRequest";
import GraphicsRequest from "./pages/Dashboard/NewRequest/GraphicsRequest";
import VideoRequest from "./pages/Dashboard/NewRequest/VideoRequest";
import ContentRequest from "./pages/Dashboard/NewRequest/ContentRequest";
import WhyConterize from "./pages/WhyConterize/WhyConterize";
import ContentCreators from "./pages/ContentCreators/ContentCreators";
import CreatorsRegistration from "./pages/Register/CreatorsRegistration";
import Admin from "./pages/Admin/Admin";
import Customers from "./pages/Admin/Customers/Customers";
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";
import Orders from "./pages/Admin/Orders/Orders";
import Freelancers from "./pages/Admin/Freelancers/Freelancers";
import AddCompany from "./pages/Dashboard/Company/AddCompany";
import RequestDetail from "./pages/Dashboard/Request/RequestDetail/RequestDetail";

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
          <Route path="/whyconterize" exact element={<WhyConterize />} />

          <Route path="/contentcreators" exact element={<ContentCreators />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="request" element={<Request />} />
          <Route path="requestdetail" element={<RequestDetail />} />
          <Route path="addcompany" element={<AddCompany />} />
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
          <Route path="settings" element={<Settings />} />
          <Route path="newrequest" element={<NewRequest />} />
          <Route path="contentrequest" element={<ContentRequest />} />
          <Route path="graphicsrequest" element={<GraphicsRequest />} />
          <Route path="videorequest" element={<VideoRequest />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="freelancers" element={<Freelancers />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="managerdiscount" element={<Customers />} />
          <Route path="settings" element={<Customers />} />
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route
          path="/creatorsregistration"
          exact
          element={<CreatorsRegistration />}
        />
      </Switch>
    </div>
  );
}

export default App;
