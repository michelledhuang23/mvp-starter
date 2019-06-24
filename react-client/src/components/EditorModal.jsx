import React from 'react';
import Modal from 'react-modal';
import OutputBox from './OutputBox.jsx';
import InputBox from './InputBox.jsx';

const modalStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    border: '0.05em solid rgb(38, 50, 55)',
    padding: 'none',
  }
};

Modal.setAppElement('#app');

class EditorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log('after open');
  }

  onInputChange(e) {
    this.setState({
      text: e.target.value
    });
  }
  
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        style={modalStyles}
        contentLabel="Editor"
        >
        <div style={{"display": "flex", "flexDirection": "row"}}>
          <InputBox onChange={this.onInputChange}/>
          <OutputBox text={this.state.text}/>
        </div>
      </Modal>
    );
  }
}

export default EditorModal;