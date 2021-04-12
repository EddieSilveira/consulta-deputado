import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  //Renderiza o componente
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="d-flex justify-content-center p-4"
    >
      <Navbar.Brand href="#home">
        <h1>Consulta Deputado</h1>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
