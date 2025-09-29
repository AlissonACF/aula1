import React, { useState } from 'react';

  function App() {
   const [nome, setNome] = useState("");
   const [email, setEmail] = useState("");
   const [telefone, setTelefone] = useState("");
  
   const handleSubmit = (e) => {
     e.preventDefault();
      console.log({nome});
      console.log({email});
      console.log({telefone});
   }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input id='nome' type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          <br />
          <label>Email:</label>
          <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label>Telefone:</label>
          <input id='telefone' type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          <br />
          <button type="submit">Enviar</button>
          <br />
          <label>{nome}</label>
          <br />
          <label>{email}</label>
          <br />
          <label>{telefone}</label>
        </form>
      </div>
    )
  }

export default App;