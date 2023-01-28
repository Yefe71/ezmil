import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from "../components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <div className = "app">
      
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="App.css" />
      <title>Ez Mil</title>
      <header>
      <Navbar />
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto
          autem quae provident sed ipsam laudantium quos, eveniet fugit beatae
          similique vitae repellat, fugiat animi exercitationem accusamus, totam
          quaerat? Nam, fugiat? Perferendis adipisci deleniti accusantium, illum
          quis harum. Magni animi placeat vero deleniti molestias impedit,
          aspernatur minus. Ea minima, quisquam, facilis assumenda consequatur
          dicta velit eaque optio, consectetur neque cum unde tenetur numquam.
          Hic.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione
          debitis consectetur, cupiditate tempore quae sed dolor dolorum
          nesciunt animi. Autem fuga maiores cum quia, minus aliquid odit
          repellendus molestiae. Excepturi perferendis sequi obcaecati
          recusandae ratione optio ex sint ducimus corrupti neque impedit,
          architecto minus!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          voluptates modi ducimus neque omnis itaque recusandae impedit cum
          aliquid maxime? Nam vero quis et omnis quos necessitatibus repellat
          deserunt facilis! Aliquam temporibus dolorum sint cumque ipsam placeat
          non quisquam ad facere quod commodi magni, laboriosam repudiandae
          tempora provident distinctio? Velit asperiores amet dolorum esse.
          Fugiat, enim recusandae modi id saepe eligendi maiores libero sint
          nulla ut quisquam numquam autem voluptates labore dolore at.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione
          debitis consectetur, cupiditate tempore quae sed dolor dolorum
          nesciunt animi. Autem fuga maiores cum quia, minus aliquid odit
          repellendus molestiae. Excepturi perferendis sequi obcaecati
          recusandae ratione optio ex sint ducimus corrupti neque impedit,
          architecto minus!
        </p>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
