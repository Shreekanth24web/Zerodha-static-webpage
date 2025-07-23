
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"

// import NotFound from './landing_page/NotFound';
// // import './index.css';
// import Navbar from './landing_page/Navbar'
// import HomePage from './landing_page/home/HomePage';
// import SignUp from './landing_page/signup/Signup'
// import AboutPage from './landing_page/about/About'
// import ProductPage from './landing_page/products/ProductPage'
// import PricingPage from './landing_page/pricing/PricingPage'
// import SupportPage from './landing_page/support/SupportPage'
// import Footer from './landing_page/Footer'
// import Equity from './landing_page/pricing/ChargesTables/Equity';
// import Currency from './landing_page/pricing/ChargesTables/Currency';
// import Commodity from './landing_page/pricing/ChargesTables/Commodity';
// import Login from './landing_page/signup/Login';
// import Dashboard from './dashboard/Home' 

// import FrontendRoutes from './landing_page/FrontendRoutes';

import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>

    {/* <Navbar /> */}
    {/* <Routes> */}
      {/* <Route path='/frontendRoutes' element={<FrontendRoutes />} /> */}
      {/* <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/products' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} >
        <Route path='tab-equity' element={<Equity/>} />
        <Route path='tab-currency' element={<Currency/>} />
        <Route path='tab-commodity' element={<Commodity/>} />
      </Route>
      <Route path='/support' element={<SupportPage />} />
      <Route path='/dashboard' element={<Dashboard/>} /> */}
      {/* <Route path='*' element={<NotFound />} /> */}
    {/* </Routes> */}
    {/* <Footer /> */}

  </BrowserRouter>
);

