import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ItemsDetail from "./components/Items/ItemsDetail";
import NavBar from "./components/Home/NavBar";
import Cart from "./components/Home/Cart";
const App = () => {
  //const Home = () => <h1>Home</h1>;
  const Pets = () => <h1>Pet List</h1>;
  // const Layout = () => <h1>Layout</h1>;
  return (
    <>
      
      <BrowserRouter>
      <NavBar/>
        <Routes>
          
          <Route path="/" element={<Home />}></Route>
          <Route exact path="items/:id" element={<ItemsDetail />}></Route>
          <Route exact path="/comprar" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;