import React from 'react';
import styled from 'styled-components';

const InputTextArea = styled.textarea`
  width: 50vh;
  height: 50vh;
  background-color: #17223b;
  padding: 20px 20px;
  border: none;
  color: #ffffff;
  font-size: 15px;

  &:focus {
    outline: none;
  }
`;

class InputBox extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <InputTextArea className='input-box' onChange={this.props.onChange} />
    );
  }
}

export default InputBox;