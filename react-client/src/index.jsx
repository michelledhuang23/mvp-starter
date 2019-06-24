import React from 'react';
import ReactDOM from 'react-dom';
import BlogPost from './components/BlogPost.jsx';
import Header from './components/Header.jsx';
import InputBox from './components/InputBox.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  // componentDidMount() {
  //   const id = window.location.pathname.substring(8);
  //   const limit = 1;
  //   let url;
  //   if (id > limit) {
  //     url = `/travel/1/saved`;
  //   } else {
  //     url = `/travel/${id}/saved`
  //   }
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => console.error(error))
  // }

  render () {
    return (<div>
      <Header/>
      <InputBox onChange={this.onInputChange}/>
      <BlogPost text={this.state.text}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));