import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import BlogPost from './components/BlogPost.jsx';
import Header from './components/Header.jsx';
import InputBox from './components/InputBox.jsx';

const modalStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#app');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      modalIsOpen: false,
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onInputChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    return (<div>
      <Header/>
      <button onClick={this.openModal}>Compose</button>
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyles}
          contentLabel="Editor"
        ></Modal>
      <div style={{"display": "flex", "flexDirection": "row"}}>
        <InputBox onChange={this.onInputChange}/>
        <BlogPost text={this.state.text}/>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));