import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Shop from './Pages/Shop/Shop';
import Blog from './Pages/Blog/Blog';
import NoPage from "./Pages/NoPage/NoPage";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="*" element={<NoPage />} />
          {/* <Route path="Sign" element={<Sign />} />
            <Route path="Cart" element={<Cart />} /> */}
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
export default App;
