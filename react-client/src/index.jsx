import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import EditorModal from './components/EditorModal.jsx';
import Feed from './components/Feed.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.substring(6);
    const max = 10;
    const min = 1;
    let url;
    if (id > max || id < min) {
      url = '/posts/1';
    } else {
      url = `/posts/${id}`
    }
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then(posts => {
        this.setState({posts});
      })
      .catch((err) => {
        console.error(err);
      })
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
      <Feed posts={this.state.posts}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));