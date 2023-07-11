import "./App.css";
import Post from "./component/Post/Post";
import Footer from "./component/Shared/Footer/Footer";
import Navbar from "./component/Shared/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Post></Post>
      <Footer></Footer>
    </div>
  );
}

export default App;
