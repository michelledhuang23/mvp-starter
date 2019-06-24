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

  render () {
    return (<div>
      <Header/>
      <div style={{"display": "flex", "flexDirection": "row"}}>
        <InputBox onChange={this.onInputChange}/>
        <BlogPost text={this.state.text}/>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));