import logo from './logo.svg';
import './App.css';
import Loja from './components/Loja';
import React, {useEffect, useState} from 'react';



const Dezenas = ({cliques}) => {
  useEffect(() => {
    console.log(`dezenas: ${cliques}`);

    return () => console.log(`useEffect - dezenas descarga: ${cliques}`);
  }, [])
  return <h2>{parseInt(cliques / 10)} dezenas + {cliques % 10} cliques.</h2>
}

const Unidades = ({cliques}) => {
  useEffect(() => {
    console.log(`unidade: ${cliques}`);

    return () => console.log(`useEffect - unidades descarga: ${cliques}`);
  }, [cliques])
  return <h2>{cliques} cliques.</h2>
}

function App() {
  const [cliques, setCliques] = useState(0);

  let painel;

  if (cliques < 10) {
    painel = <Unidades cliques={cliques}/>;
  } else {
    painel = <Dezenas cliques={cliques} />;
  }

  return (
    <div>
      <Loja />
      {painel}
      <button onClick={() => setCliques(cliques + 1)}>Clique aqui!!!</button>
    </div>
  );
}

export default App;
