import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import ModalPolitico from '../ModalPolitico/ModalPolitico';

const FormPesquisa = () => {
  const [lgShow, setLgShow] = useState(false);
  const [nomePesquisa, setNomePesquisa] = useState('');
  const [iniciaPesquisa, setIniciaPesquisa] = useState(false);
  const [deputados, setDeputados] = useState([]);
  const [contador, setContador] = useState(0);

  //Executado quando clicar no botão Pesquisar
  useEffect(() => {
    //Verificação campo de pesquisa
    if (!nomePesquisa && contador === 1) {
      alert('Digite o nome de um deputado!');
      window.location.reload();
    }
    //Adequar o nome pesquisado para a API
    let nomeTratado = nomePesquisa.replace(' ', '%20');
    //Fazer a requisição
    if (nomeTratado) {
      const url = `https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${nomeTratado}&ordem=ASC&ordenarPor=nome`;
      fetch(url)
        .then(async (response) => setDeputados((await response.json()).dados))
        .catch(function (error) {
          console.error('Houve um erro na requisição' + error.message);
        });
      //Abre modal
      setLgShow(true);
    }
    setContador(contador + 1);
  }, [iniciaPesquisa]);

  //Renderiza o componente
  return (
    <Container className="p-5 h-75 d-flex justify-content-center align-items-center">
      <Form inline>
        <Form.Control
          className="mb-2 mr-sm-2"
          placeholder="Pesquisar por nome"
          value={nomePesquisa}
          onChange={(event) => setNomePesquisa(event.target.value)}
        />
        <Button
          type="button"
          className="mb-2"
          onClick={() => setIniciaPesquisa(true)}
        >
          Pesquisar
        </Button>
      </Form>
      <ModalPolitico
        lgShow={lgShow}
        deputado={deputados}
        setLgShow={setLgShow}
      />
    </Container>
  );
};

export default FormPesquisa;
