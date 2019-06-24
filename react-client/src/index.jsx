import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import EditorModal from './components/EditorModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    return (<div>
      <Header onCompose={this.openModal}/>
      <EditorModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));