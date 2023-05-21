import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
        rel="stylesheet"
      />
      <div className="App">
        <header className="App-header"></header>

        <main>
          <div id="root">
            <div className="container">
              <h1 className="title">babyhero.com.br</h1>
              <p className="convincing-text">
                Este domínio único está disponível para venda!
              </p>
              <p className="convincing-text">Entre em contato agora mesmo,</p>
              <p className="contact-email">
                envie um e-mail para: <br />
                <a href="mailto:devmatheus@gmail.com">devmatheus@gmail.com</a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
