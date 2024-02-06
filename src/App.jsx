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
      <div className="pl-[5.5rem] pr-[5.5rem] my-2 lg:pl-[12.5rem] lg:pr-[12.5rem] ">
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
