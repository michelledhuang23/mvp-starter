import React from 'react';
import MarkDown from 'markdown-react-js';

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
      <MarkDown text={this.props.text}/>
    );
  }
}

export default BlogPost;