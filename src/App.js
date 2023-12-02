import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import AdminHome from './pages/AdminHome';
import ViewProduct from './pages/ViewProduct';
import AddProduct from './pages/AddProduct';


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<AdminHome />}/>
              <Route path='/addProduct' element={<AddProduct />}/>
              <Route path='/viewProduct' element={<ViewProduct />}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
