import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Leads from "./components/Leads";
import LeadsPage from "./components/LeadPage";
import ForgotPassword from "./components/ForgotPassword";
import OTPPage from "./components/OtpPage";
import SuccessScreen from "./components/SuccessScreen";
import ConfirmPassword from "./components/ConfirmPassword";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
            <Route path="/" element={<Login />} />
            <Route
              path="/leads"
              element={
                <Layout>
                  <Leads />
                </Layout>
              }
            />
            <Route
              path="/leadspage"
              element={
                <Layout>
                  <LeadsPage />
                </Layout>
              }
            />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/otppage" element={<OTPPage />} />
            <Route path="/confirmpassword" element={<ConfirmPassword />} />
            <Route path="/successpage" element={<SuccessScreen />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
