import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Doctor from "./Components/Doctor/Doctor";
import Doctors from "./Components/Doctors/Doctors";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Service from "./Components/Service/Service";
import Tests from "./Components/Tests/Tests";
import Login from "./Components/UserRegister/Login/Login";
import Register from "./Components/UserRegister/Register/Register";
import Authprovider from "./Context/Authprovider";

function App() {
  return (
    <div className="bg-color">
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/tests">
              <Tests></Tests>
            </Route>

            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>

            <PrivateRoute path="/service/:serviceId">
              <Service></Service>
            </PrivateRoute>

            <PrivateRoute path="/doctor/:doctorId">
              <Doctor></Doctor>
            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
