import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from "./pages/signup";
import Login from "./pages/login"
import Profile from "./pages/profile"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" >
         <Signup />
      </Route>
      <Route path="/login" >
         <Login />
      </Route>
      <Route path="/profile" >
        <Profile />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
