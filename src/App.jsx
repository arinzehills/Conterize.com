import { useEffect, useState } from "react";
import "./App.css";
import {
  Routes as Switch,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
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
import AcceptInvitation from "./pages/Dashboard/Team/AcceptInvitation";
import { ReactNotifications } from "react-notifications-component";
import handleNot from "./components/HandleNotification/HandleNot";
import PrivateRoutes from "./utils/PrivateRoutes";
import useToken from "./useToken";

function App() {
  const [count, setCount] = useState(0);
  const { token, setToken } = useToken();

  const [handleNotData, setHandleNotData] = useState({
    message: "no",
    color: "var(--success)",
  });
  //this check wether a pricing item is selected and set to the location state otherwise
  //it will navigate the user to pricing page to pick pricing before registration
  const registerLocation = useLocation("/register");

  useEffect(() => {
    if (handleNotData.message !== "no") {
      handleNot({
        title: "Success",
        message: handleNotData.message,
        backgroundColor: handleNotData.color ?? "var(--success)",
      });
    }
  }, [handleNotData.message]);
  return (
    <div className="App">
      <ReactNotifications />
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
        <Route element={<PrivateRoutes token={token} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              path="request"
              element={<Request setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="requestdetail"
              element={<RequestDetail setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="addcompany"
              element={<AddCompany setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="company"
              element={<Company setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="team"
              element={<Team setHandleNotForTeam={setHandleNotData} />}
            />
            <Route
              path="settings"
              element={<Settings setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="newrequest"
              element={<NewRequest setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="contentrequest"
              element={<ContentRequest setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="graphicsrequest"
              element={<GraphicsRequest setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="videorequest"
              element={<VideoRequest setHandleNotData={setHandleNotData} />}
            />
            <Route
              index
              element={<Home setHandleNotData={setHandleNotData} />}
            />
          </Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="freelancers" element={<Freelancers />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="managerdiscount" element={<Customers />} />
          <Route path="settings" element={<Customers />} />
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route
          path="/login"
          exact
          // element={<Navigate to={"/dashboard"} />}
          element={<Login setHandleNotData={setHandleNotData} />}
          // element={token === null ? <Login /> : <Navigate to={"/dashboard"} />}
        />

        <Route
          path="/register"
          element={
            !registerLocation.state ? (
              <Navigate to={"/pricing"} />
            ) : (
              <Register />
            )
          }
        />
        {/* <Route path="/register" element={<Navigate to={"/pricing"} />} /> */}
        <Route path="/acceptInvite" element={<AcceptInvitation />} />
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
