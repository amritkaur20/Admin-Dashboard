import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/Topbar/TopBar";
import "./app.css"
import Home from "./Pages/Home/Home";
import UserList from "./Pages/UserList/UserList";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/NewProduct/NewProduct";



function App() {
  return (

    <BrowserRouter>
   <TopBar/>
   <div className="container">
   <SideBar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/userlist" element={<UserList/>}/>
   <Route path="/userlist/:userId" element={<User/>}/>
   <Route path="/newuser" element={<NewUser/>}/>

   <Route path="/products" element={<ProductList/>}/>
   <Route path="/product/:productId" element={<Product/>}/>
   <Route path="/newproduct" element={<NewProduct/>}/>
 </Routes>
   </div>
   
   </BrowserRouter>
  );
}

export default App;
