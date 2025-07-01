import './App.css'
import './style.css'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Insights from './pages/Insights';
import MinimalLayout from './layout/MinimalLayout';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Otp from './pages/Otp.jsx';
import CreateNewPassword from './pages/CreateNewPassword.jsx';
import HomePage from './pages/HomePage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Product from './pages/Product.jsx';
import ProductView from './pages/ProductView.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import HotDeal from './pages/HotDeal.jsx';
import WishList from './pages/WishList.jsx';
import Notification from './pages/Notification.jsx';
import Chat from './pages/Chat.jsx';


function App() {

  return (
    <>

      <BrowserRouter basename="/">
        {/* <ToastContainer/> */}

        <Routes>
          <Route path="/" element={<MinimalLayout />}>
            <Route path="login" element={<Login />} />
            {/* <Route path="signup" element={<SignupPage />} /> */}
            	<Route path="register" element={<Register />} />
					<Route path="forgot" element={<ForgotPassword />} /> 
				 <Route path="otp" element={<Otp />} /> 
						 <Route path="newpassword" element={<CreateNewPassword />} /> 
          </Route>



          <Route path="/" element={<MainLayout />}>
            <Route index  element={<HomePage />} />
            
             {/* <Route path="homepage" element={<HomePage />} />  */}
             <Route path="dashboard" element={<Dashboard />} /> 
             <Route path="product" element={<Product />} /> 
             <Route path="productview" element={<ProductView />} /> 
             <Route path="productdetail" element={<ProductDetail />} /> 
             <Route path="hotdeal" element={<HotDeal />} /> 
             <Route path="wishlist" element={<WishList />} /> 
             <Route path="notification" element={<Notification />} /> 
             <Route path="chat" element={<Chat />} /> 








            <Route path="Insights" element={<Insights />} />



             {/* <Route path="dashboards/"> */}
						
							{/* <Route path="dashboard5" element={<Dashboard5Page />} /> */}
						{/* </Route> */}

          </Route>

          {/* <Route path="/" element={<MainLayout container={false} pb={false} />}>
						<Route path="pages/">
							<Route path="wip" element={<WIPPage />} />
						</Route>
					</Route> */}
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
