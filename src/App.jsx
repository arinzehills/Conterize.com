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
import AcceptInvitation from "./pages/Dashboard/Team/AcceptInvitation";
import { ReactNotifications } from "react-notifications-component";
import handleNot from "./components/HandleNotification/HandleNot";
import PrivateRoutes from "./utils/PrivateRoutes";
import useToken from "./useToken";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import UserRequestDetail from "./pages/Dashboard/UserRequestDetail/UserRequestDetail";
import OrderDetail from "./pages/Admin/Orders/OrderDetail";
import Deliver from "./pages/Admin/Deliver/Deliver";
import { CheckDelivery } from "./pages/Dashboard/Delivery/CheckDelivery";
import NoDataFound from "./pages/Dashboard/Request/NoDataFound";
import AdminPrivateRoute from "./utils/AdminPrivateRoute";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Terms/Privacy";
import SettingsComponent from "./pages/Dashboard/Settings/SettingsComponent";
import GetDemo from "./pages/GetDemo/GetDemo";
import DemoPage from "./pages/GetDemo/DemoPage";

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
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/getdemo" element={<GetDemo />} /> */}
          <Route exact path="/getdemo" element={<DemoPage />} />
          <Route exact path="/pricing" element={<Pricingpage />} />
          <Route exact path="/content-types" element={<ContentTypePage />} />
          <Route exact path="/whyconterize" element={<WhyConterize />} />

          <Route exact path="/content-creators" element={<ContentCreators />} />
          <Route exact path="/Terms" element={<Terms />} />
          <Route exact path="/PrivacyPolicy" element={<Privacy />} />
        </Route>
        <Route element={<PrivateRoutes token={token} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              path="request"
              element={<Request setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="requestdetail"
              element={
                <UserRequestDetail setHandleNotData={setHandleNotData} />
              }
            />
            <Route
              path="delivery"
              element={<CheckDelivery setHandleNotData={setHandleNotData} />}
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
        <Route
          path="adminlogin"
          element={<AdminLogin setHandleNotData={setHandleNotData} />}
        />
        <Route element={<AdminPrivateRoute token={token} />}>
          <Route
            path="/admin"
            element={<Admin setHandleNotData={setHandleNotData} />}
          >
            <Route
              path="freelancers"
              element={
                <Freelancers
                  handleNotData={handleNotData}
                  setHandleNotData={setHandleNotData}
                />
              }
            />

            <Route
              path="customers"
              element={<Customers setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="orders"
              element={<Orders setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="orderdetail"
              element={<OrderDetail setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="deliver"
              element={<Deliver setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="managerdiscount"
              element={<Customers setHandleNotData={setHandleNotData} />}
            />
            <Route
              path="settings"
              element={
                <SettingsComponent
                  handleNot={handleNot}
                  setHandleNotData={setHandleNotData}
                />
              }
            />
            <Route
              index
              element={<AdminDashboard setHandleNotData={setHandleNotData} />}
            />
          </Route>
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
        <Route
          path="*"
          status={404}
          element={<NoDataFound message={"404 Route not Found"} />}
        />
      </Switch>
    </div>
  );
}

export default App;
