import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context";
import "./App.css";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import AddPost from "./AddPost";
import EditBlog from "./EditBlog";

function App() {
 
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/edit/:id" element={<EditBlog />}/>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
