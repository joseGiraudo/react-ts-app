import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorReducer } from "./components/ContadorReducer";

import { Formulario } from "./components/Formulario";

function App() {
  return (
    <>
      <h1>
        Hola Mundo - TSX
      </h1>
      <hr />

      <Counter />
      <Usuario />

      <h2>UseEffect - UseRef</h2>
      <hr />
      <TimerPadre />

      <br />

      <h2>UseReducer</h2>
      <hr />
      <ContadorReducer />
      <br/>
      <br />
      <br />

      <h2>Custom Hooks</h2>
      <hr />
      <Formulario />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  );
}

export default App;
