import React from 'react';
import MarkDown from 'markdown-react-js';
import styled from 'styled-components';

const MarkdownContainer = styled.div`
  width: 50vh;
  height: 50vh;
  padding: 0px 20px;
  overflow-x: hidden;
  overflow-y: auto;
`;

class BlogPost extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: null,
      post: null,
      tags: null,
    }
  }

  render() {
    return (
      <MarkdownContainer>
        <MarkDown text={this.props.text}/>
      </MarkdownContainer>
    );
  }
}

export default BlogPost;