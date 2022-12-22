import Navigation from './components/shared/Navigation/Navigation';
import './App.css';
import Home from "./pages/Home/Home";
import {BrowserRouter, Route,  Switch, Redirect, useSelector} from "react-router-dom";

import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';
const isAuth=false;
const user={
  activated: false,
}


function App() {
  return (
    
    <BrowserRouter>
    <Navigation/>
    <Switch>
      <GuestRoute exact path='/' >
        <Home/>
      </GuestRoute>
      <GuestRoute path='/authenticate' >
        <Authenticate/>
      </GuestRoute>
      <SemiProtectedRoute path='/activate'>
        <Activate/>
      </SemiProtectedRoute>
      <ProtectedRoute path="/rooms">
        <Rooms/>
      </ProtectedRoute>
      {/* <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/> */}
      
    </Switch>
    </BrowserRouter>
    
  );
}

const GuestRoute=({children,...rest})=>{
  return(
      <Route 
      {...rest}
      render={({location})=>{
        return isAuth ? (
          <Redirect to={{
          
              pathname: '/rooms',
              state: {from: location},
            }}
          />
        )  :  (
          children
        );
      }}
    ></Route>
  );
};

const SemiProtectedRoute = ({ children, ...rest }) => {
  
  return (
      <Route
          {...rest}
          render={({ location }) => {
              return !isAuth ? (
                  <Redirect
                      to={{
                          pathname: '/',
                          state: { from: location },
                      }}
                  />
              ) : isAuth && !user.activated ? (
                  children
              ) : (
                  <Redirect
                      to={{
                          pathname: '/rooms',
                          state: { from: location },
                      }}
                  />
              );
          }}
      ></Route>
  );
};
const ProtectedRoute = ({ children, ...rest }) => {
  
  return (
      <Route
          {...rest}
          render={({ location }) => {
              return !isAuth ? (
                  <Redirect
                      to={{
                          pathname: '/',
                          state: { from: location },
                      }}
                  />
              ) : isAuth && !user.activated ? (
                  <Redirect
                      to={{
                          pathname: '/activate',
                          state: { from: location },
                      }}
                  />
              ) : (
                  children
              );
          }}
      ></Route>
  );
};
export default App;
