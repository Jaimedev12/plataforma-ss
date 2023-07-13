import Button from "react-bootstrap/Button";
import { Routes, Route, RouterProvider } from 'react-router-dom';
import NavBar from "./components/NavBar.jsx";
import Home from './pages/Home/Home.jsx';
import FunctionTester from './pages/FunctionTester/FunctionTester.jsx';

//import router from './router';

const App = () => {
 return (
    <>

      {/* <RouterProvider router={router}/> */}

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/function-tester" element={<FunctionTester />} />
      </Routes>
    </>
 );
};

export default App;
