import {Routes,Route} from 'react-router-dom';

import About from './pages/About';
import Pagenotfound from './pages/Pagenotfound';
import  Policyy  from './pages/Policyy';
import Contactt from './pages/Contact';
import Register from './pages/Auth/Register';

  import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private.js';
import ForgotPassword from './pages/Auth/ForgottPassword.js';
import AdminRoute from './components/Routes/AdminRoute.js';
import AdminDashboard from './pages/Admin/AdminDashboard.js';
import CreateCategory from './pages/Admin/CreateCategory.js';
import CreateProduct from './pages/Admin/CreateProduct.js';

import Userss from './pages/Admin/Users.js';
import Orders from './pages/user/Orders.js';
import Profile from './pages/user/Profile.js';
import Products from './pages/Admin/Products.js';
import UpdateProduct from './pages/Admin/UpdateProduct.js';
import Homepage from './pages/Homepage.js';
import Search from './pages/Search.js';
import ProductDetails from './pages/ProductDetails.js';
import Categories from './pages/Categories.js';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage.js';
import AdminOrders from './pages/Admin/AdminOrders.js';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Homepage/>}/>
      <Route path='/search' element = {<Search/>}/>
      <Route path='/product/:slug' element = {<ProductDetails/>}/>
      <Route path='/categories' element = {<Categories/>}/>
      <Route path='/cart' element = {<CartPage/>}/>
      <Route path='/category/:slug' element = {<CategoryProduct/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/forgot-password' element = {<ForgotPassword/>}/>
      
      <Route path='/dashboard' element = {<PrivateRoute/>}> 
      <Route path= 'user' element = {<Dashboard/>}/>
      <Route path= 'user/orders' element = {<Orders/>}/>
      <Route path= 'user/profile' element = {<Profile/>}/>
      </Route>

      <Route path='/dashboard' element = {<AdminRoute/>}>
        <Route path='admin' element = {<AdminDashboard/>}></Route>
        <Route path='admin/create-category' element = {<CreateCategory/>}></Route>
        <Route path='admin/create-product' element = {<CreateProduct/>}></Route>
        <Route path='admin/products' element = {<Products/>}></Route>
        <Route path='admin/orders' element = {<AdminOrders/>}></Route>
        <Route path='admin/product/:slug' element = {<UpdateProduct/>}>


        </Route>

        <Route path='admin/users' element = {<Userss/>}></Route>

      </Route>
      
      <Route path='/about' element = {<About/>}/>
      
      <Route path='/policy' element = {<Policyy/>}/>
      <Route path='/contact' element = {<Contactt/>}/>
      <Route path='*' element = {<Pagenotfound/>}/>


    </Routes>
    </>
  );
}

export default App;
