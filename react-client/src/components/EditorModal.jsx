import React from 'react';
import Modal from 'react-modal';
import OutputBox from './OutputBox.jsx';
import InputBox from './InputBox.jsx';
import styled from 'styled-components';

const TagsInput = styled.input`
  width: 100%;
  margin: 10px;
  padding: none;
  border: 2px solid #6b778d;
  border-radius: 3px;
  color: #6b778d;
  font-size: 15px;
  padding: 0 20px;

  &:focus {
    outline: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 0.05em solid rgb(38, 50, 55);
  border-radius: 10px;
  overflow: hidden;
`;

const CreateButton = styled.button`
  margin: 10px;
  width: 150px;
  height: 40px;
  border-radius: 3px;
  font-size: 15px;
  cursor: pointer;
  background-color: #6b778d;
  border: none;
  color: #ffffff;

  &:hover {
    border: 2px solid #6b778d;
    color: #6b778d;
    background-color: #ffffff;
  }
`;

const modalStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    border: 'none',
    padding: '15px',
  }
};

Modal.setAppElement('#app');

class EditorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      tags: [],
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.onTagsInputChange = this.onTagsInputChange.bind(this);
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log('after open');
  }

  onTagsInputChange(e) {
    const tags = e.target.value.split(' ').filter(tag => tag[0] === '#');
    this.setState({
      tags: tags,
    });
  }

  onInputChange(text) {
    this.setState({
      text
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
        <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
          <InputContainer>
            <InputBox onChange={this.onInputChange}/>
            <OutputBox text={this.state.text}/>
          </InputContainer>
          <div style={{"width": "100%", "display": "flex", "flexDirection": "row"}}>
            <TagsInput placeholder="#cats #hrsf117 #hackreactor" onChange={this.onTagsInputChange}/>
            <CreateButton onClick={this.props.onCreatePost.bind(null, this.state.text, this.state.tags.join(' '))}>Create</CreateButton>
          </div>
        </div>
      </Modal>
    );
  }
}

export default EditorModal;