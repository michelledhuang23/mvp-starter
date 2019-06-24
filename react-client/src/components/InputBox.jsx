import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    <textarea className='input-box' onChange={this.props.onChange}>

    </textarea>
    );
  }
}

export default InputBox;