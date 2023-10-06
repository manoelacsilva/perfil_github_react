import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const nome = 'Manoela';

  function retornaNome() {
    return nome;
  };

  const pessoa = {
    nome: 'Aline'
  };

  let estaDeDia = false;
  let estaChovendo = true;

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      {/* <h1>Olá, {retornaNome()}</h1>
      <h2>Olá, {pessoa.nome}</h2>
      <h3>Olá, Marcelo</h3>

      {estaDeDia ? 'Bom dia' : 'Boa noite'} <br />
      {estaChovendo && 'Leve o guarda-chuva'} <hr /> */}

      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Digite seu GitHub"/>

      {nomeUsuario.length > 3 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>Toggle Form</button> */}
    </>
  )
}

export default App
