import "./App.css";
import { BrowserRouter} from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
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

