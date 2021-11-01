import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddNewService from './components/AddNewService/AddNewService';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Booking from './components/Booking/Booking/Booking';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound'

function App () {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addNewService">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <Route path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
