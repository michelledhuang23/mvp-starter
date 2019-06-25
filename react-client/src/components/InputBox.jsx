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

  componentDidMount() {
    const defaultText = '# Hello There\nWhat are you thinking about?'
    const text = this.props.text || defaultText;
    const element = document.getElementById('input-textarea');
    element.value = text;
    this.props.onChange(text);
  }
  
  render() {
    return (
      <InputTextArea id="input-textarea" className='input-box' onChange={(e) => { this.props.onChange(e.target.value) }} />
    );
  }
}

export default InputBox;