import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import Experts from './pages/Experts';
import AskNow from './pages/AskNow';
import Inbox from './pages/Inbox';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="">
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/' element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path='/profile/:userId' element={<Profile />} />
            <Route path='/inbox' element={< Inbox />} />
            <Route path='/askNow' element={<AskNow />} />
            <Route path='/experts' element={<Experts />} />            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
