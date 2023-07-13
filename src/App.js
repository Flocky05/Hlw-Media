import "./App.css";
import MyForm from "./component/Home/textArea/textArea";
import Post from "./component/Post/Post";
import Footer from "./component/Shared/Footer/Footer";
import Navbar from "./component/Shared/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MyForm></MyForm>
      <Post></Post>
      <Footer></Footer>
    </div>
  );
}

export default App;
