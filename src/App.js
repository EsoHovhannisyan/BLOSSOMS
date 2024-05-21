import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Shop from './Pages/Shop/Shop';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="Blog" element={<Blog />} />
            {/* <Route path="Sign" element={<Sign />} />
            <Route path="Cart" element={<Cart />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
