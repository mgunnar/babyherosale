import React from 'react';

const TextoPrincipal: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">babyhero.com.br</h1>
      <p className="convincing-text">
        Este domínio único está disponível para venda!
      </p>
      <p className="convincing-text">Entre em contato agora mesmo,</p>
      <p className="contact-email">
        envie um e-mail para:{" "}
        <a href="mailto:devmatheus@gmail.com">devmatheus@gmail.com</a>
      </p>
    </div>
  );
};

export default TextoPrincipal;
