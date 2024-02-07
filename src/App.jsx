import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="">
        <Routes>
          <Route path='/sign-in' element={<SignIn />} />
          {/* <Route element={<PrivateRoute />}> */}
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          {/* </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
