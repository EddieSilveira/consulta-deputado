import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import FormPesquisa from './components/Form/FormPesquisa';

function App() {
  return (
    <Container style={{ height: 450 }} fluid className="mh-100">
      <Header></Header>
      <FormPesquisa />
    </Container>
  );
}
export default App;
