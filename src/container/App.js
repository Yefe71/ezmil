import "./App.css";
import { BrowserRouter} from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import { Home } from "../Pages/Home/Home";
import { Discography } from "../Pages/Discography/Discography";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AnimatedRoutes from "../components/AnimatedRoutes/AnimatedRoutes";



const Layout = () => (
  <div className="app">
    <title>Ez Mil</title>
    <Navbar />
    <AnimatedRoutes/>
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

