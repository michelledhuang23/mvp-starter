import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map.jsx';
import Header from './components/Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>
      <Header/>
      <Map/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));