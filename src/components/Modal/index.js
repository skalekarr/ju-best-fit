import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Modal } from 'react-bootstrap';

import { toggleModal } from '../../actions/action-creators/app';

import BestFit from '../BestFit';
import SizeChart from '../SizeChart';

const mapStateToProps = ({ app: { modals: { modal } } }) => ({
  modal,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ toggleModal }, dispatch)
);

const CustomModal = ({
  modal,
  toggleModal,
}) => {
  const close = () => {
    toggleModal({
      modal: 'modal',
      active: false,
    });
  }

  return (
    <Modal show={modal.active} onHide={close}>
      <Modal.Header>
        <Modal.Title className="modal-title" style={{ display: 'inline-block' }}>Choose your size</Modal.Title>
        <Button className="close" bsStyle="link" onClick={close} style={{ display: 'inline-block', float: 'right' }}>
          <span>&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        {
          modal.type === 'chart' && <SizeChart />
        }
        {
          modal.type === 'size' && <BestFit />
        }
      </Modal.Body>
      {
        modal.footer && 
        <Modal.Footer>
          <Button onClick={close} bsStyle="primary">Dismiss</Button>
        </Modal.Footer>
      }
    </Modal>
  );
}

CustomModal.defaultProps = {
  modal: {
    active: false, // modal closed by default
  },
};

CustomModal.propTypes = {
  modal: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);
