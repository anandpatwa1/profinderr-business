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
import EmailVerification from './mobilescreen/EmailVerification.jsx';
import SubscriptionPlan from './mobilescreen/SubscriptionPlan.jsx';
import PaymentScreens from './mobilescreen/PaymentScreens.jsx';
import PaymentMethod from './mobilescreen/PaymentMethod.jsx';
import AddCard from './mobilescreen/AddCard.jsx';
import EditPage from './dashboardSection/EditPage.jsx';
import ChooseCategoryPage from './dashboardSection/ChooseCategoryPage.jsx';
import PlanPurchase from './mobilescreen/PlanPurchase.jsx';
import PaumentDone from './mobilescreen/PaumentDone.jsx';
import UpdatePlanPay from './mobilescreen/UpdatePlanPay.jsx';




function App() {


  return (
    <>

      <BrowserRouter basename="/">
        {/* <ToastContainer/> */}

        <Routes>
          <Route path="/" element={<MinimalLayout />}>
            <Route path="" element={<Login />} />
            {/* <Route path="signup" element={<SignupPage />} /> */}
            <Route path="register" element={<Register />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="otp" element={<Otp />} />
            <Route path="newpassword" element={<CreateNewPassword />} />
          </Route>

          {/* <Route path="/" element={<MinimalLayout />}>
          <Route path="emailvarification" element={<EmailVerification />} />
              <Route index element={<SubscriptionPlan />} />
              <Route path="payment" element={<PaymentScreens />} />
              <Route path="paymentmethod" element={<PaymentMethod />} />
              <Route path="Card" element={<AddCard />} />
              <Route path="purchase" element={<PlanPurchase />} />

              <Route path="pay" element={<PaumentDone />} />
              <Route path="UpdatePlan" element={<UpdatePlanPay />} />
          </Route> */}

          <Route path="/" element={<MainLayout />}>
            {/* <Route index element={<Dashboard />} /> */}

            {/* <Route path="homepage" element={<HomePage />} />  */}
            <Route path="homepage" element={<HomePage />} />
            <Route path="product" element={<Product />} />
            <Route path="productview" element={<ProductView />} />
            <Route path="productdetail" element={<ProductDetail />} />
            <Route path="hotdeal" element={<HotDeal />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="notification" element={<Notification />} />
            <Route path="chat" element={<Chat />} />
            <Route path="edit" element={<EditPage />} />
            <Route path="chooseCetegory" element={<ChooseCategoryPage />} />











            <Route path="Insights" element={<Insights />} />



            <Route path="dashboards/">

              <Route path="emailvarification" element={<EmailVerification />} />
              <Route path="subscription" element={<SubscriptionPlan />} />
              <Route path="payment" element={<PaymentScreens />} />
              <Route path="paymentmethod" element={<PaymentMethod />} />
              <Route path="Card" element={<AddCard />} />





            </Route>

          </Route>

          <Route path="/mobile" element={<MinimalLayout />}>
            <Route path="emailvarification" element={<EmailVerification />} />
            <Route path="subscription" element={<SubscriptionPlan />} />
            <Route path="payment" element={<PaymentScreens />} />
            <Route path="paymentmethod" element={<PaymentMethod />} />
          </Route>
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
