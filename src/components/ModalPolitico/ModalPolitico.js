import React from 'react';
import Modal from 'react-bootstrap/Modal';
import CardPolitico from '../CardPolitico/CardPolitico';

const ModalPolitico = ({ lgShow, deputado, setLgShow }) => {
  //Filtra deputados repetidos
  let arrayDeputadosFiltrados = deputado.filter(function (item, i) {
    return deputado.indexOf(item, i);
  });

  //Reload para pesquisar novamente
  function reiniciaPagina() {
    setLgShow(false);
    window.location.reload();
  }
  //Renderiza o componente
  return (
    <Modal
      size="lg"
      show={lgShow}
      onHide={() => reiniciaPagina()}
      className="container-fluid w-100"
    >
      <Modal.Header
        className="d-flex flex-column align-items-center"
        closeButton
      >
        <Modal.Title>Lista de Deputados</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-wrap">
        {
          //Renderiza um card para cada deputado
          arrayDeputadosFiltrados.map((dep) => {
            return <CardPolitico deputado={dep}></CardPolitico>;
          })
        }
      </Modal.Body>
    </Modal>
  );
};

export default ModalPolitico;
