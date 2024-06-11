
// import { HashRouter, Routes, Route } from 'react-router-dom';
import AllProducts from './pages/AllProducts/index.jsx';
import Home from './pages/Home/index.jsx';
import NotF from './pages/NotF/index.jsx';
import Layout from './component/Layouts/mainLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllBlogs from './pages/AllBlogs/AllBlogsComponent.jsx';
import AboutUs from './pages/AboutUs/index.jsx';
import Contact from './pages/Contact/index.jsx';
import Chinhanh from './pages/Chinhanh/index.jsx';
import Blog1 from './pages/Blog/Blog1.jsx';
import Blog2 from './pages/Blog/Blog2.jsx';
import Blog3 from './pages/Blog/Blog3.jsx';
import Blog4 from './pages/Blog/Blog4.jsx';
import DetailProduct from './pages/DetailProduct/index.jsx';
import TintucBlog from './pages/BlogCategory/TintucBlog.jsx';
import SearchPage from './pages/SearchPage/index.jsx';
import Login from './pages/Login/index.jsx';
import Register from './pages/Register/index.jsx';
import RecoverPassword from './pages/RecoverPassword/index.jsx';
import Cart from './pages/Cart/index.jsx';
import PaymentOption from './pages/PaymentOption/index.jsx';
import InfoForm from './pages/InfoForm/index.jsx';
import FinishOrder from './pages/FinishOrder/index.jsx';

function App(){

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'tat-ca-san-pham', element: <AllProducts /> },
        { path: 'blogs', element: <AllBlogs />},
        { path: 'blogs/:category', element: <TintucBlog />},
        { path: 'gioi-thieu', element: <AboutUs /> },
        { path: 'lien-he', element: <Contact />},
        { path: 'he-thong-cua-hang', element: <Chinhanh />},
        { path: 'blogs/Blog-1', element: <Blog1 />},
        { path: 'blogs/Blog-2', element: <Blog2 />},
        { path: 'blogs/Blog-3', element: <Blog3 />},
        { path: 'blogs/Blog-4', element: <Blog4 />},
        { path: 'san-pham/:slug', element: <DetailProduct/>},
        { path: 'tim-kiem/:key', element: <SearchPage />},
        { path: 'auth/dang-nhap', element: <Login />},
        { path: 'auth/dang-ky', element: <Register />},
        { path: 'auth/lay-lai-mat-khau', element: <RecoverPassword />},
        { path: 'gio-hang', element: <Cart />},
        { path: 'phuong-thuc-thanh-toan', element: <PaymentOption />},
        { path: 'thong-tin-dat-hang', element: <InfoForm />},
        { path: 'don-hang-hoan-tat', element: <FinishOrder />},
      ],
    },
    { path: '*', element: <NotF /> },
  ],
  {
    basename: '/test/NhutTan/noithat'
  }
);

 
  return (
    <RouterProvider router={router} />
  );
}
export default App;
