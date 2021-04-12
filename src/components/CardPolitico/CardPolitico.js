import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import semFoto from '../../images/semFoto.png';

const CardPolitico = ({ deputado }) => {
  //Verifica se existe foto do deputado na API
  if (!deputado.siglaPartido) {
    deputado.urlFoto = semFoto;
    deputado.siglaPartido = 'nenhum partido';
  }
  //Verifica se existe email do deputado na API
  if (!deputado.email) {
    deputado.email = 'Não possui email cadastrado.';
  }

  //Redireciona o usuario para o site da camara
  function redirecionaUsuario() {
    let linkSaibaMais = `https://www.camara.leg.br/deputados/${deputado.id}`;
    window.open(linkSaibaMais);
  }
  //Renderiza o componente
  return (
    <CardDeck className="m-1 p-2">
      <Card style={{ width: '12rem', height: '30rem', padding: 10 }}>
        <Card.Img
          style={{ width: '100%', height: '10rem' }}
          variant="top"
          src={deputado.urlFoto}
        />
        <Card.Body className="d-flex flex-column p-1">
          <Card.Title>{deputado.nome}</Card.Title>
          <Card.Text>
            {`${deputado.nome} eleito(a) pelo estado de ${deputado.siglaUf}, filiado a ${deputado.siglaPartido}.`}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex flex-column align-items-center justify-content-center m-1">
          <Card.Text className="w-100"></Card.Text>
          <Button
            style={{ marginTop: 20 }}
            variant="secondary"
            onClick={redirecionaUsuario}
          >
            Saiba Mais
          </Button>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default CardPolitico;
