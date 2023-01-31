import "./App.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import { Home } from "../Pages/Home/Home";
import { Discography } from "../Pages/Discography/Discography";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Layout = () => (
  <div className="app">
    <title>Ez Mil</title>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="discography" element={<Discography />} />
    </Routes>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;

