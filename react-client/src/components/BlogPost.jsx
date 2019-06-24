import React from 'react';
import MarkDown from 'markdown-react-js';
import styled from 'styled-components';

const MarkdownContainer = styled.div`
  width: 50vh;
  height: 50vh;
  padding: 20px 20px;
  overflow: auto;
  color: #17223b;
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