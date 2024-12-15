import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import AuthorizedLayout from './Layout/Authorized';
import UnAuthorizedLayout from './Layout/UnAuthorized';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

import { useUser } from './context';

function App() {
  const { isAuth } = useUser();
  return (
    <div>
      <Routes>
        {isAuth ? (
          <>
            <Route path='/' element={<AuthorizedLayout />} />
          </>
        ) : (
          <>
            <Route path='/' element={<UnAuthorizedLayout />} />
          </>
        )}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
