import './App.css';

import Header from './pages/header/Header';

import Dashboard from './pages/Dashboard/Dashboard';

import NoMatch from './pages/NoMatch/NoMatch';

import PostUser from './pages/Employee/PostUser';

import UpdateUser from './pages/Employee/UpdateUser';

import {
  Routes,
  Route
} from 'react-router-dom';

function App() {

  return (

    <>

      <Header />

      <Routes>

        <Route
          path='/'
          element={<Dashboard />}
        />

        <Route
          path='/employee'
          element={<PostUser />}
        />

        <Route
          path='/employee/:id'
          element={<UpdateUser />}
        />

        <Route
          path='*'
          element={<NoMatch />}
        />

        

      </Routes>

    </>
  );
}

export default App;