import React from 'react';
import styled from 'styled-components';
import Post from './Post.jsx';

const FeedContainer = styled.div`
  width: 500px;
  margin: 10px;
`;

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <FeedContainer>
        {this.props.posts.map((post, i) => {
          return <Post key={'post-' + i} post={post} />
        })}
      </FeedContainer>
    );
  }
}

export default Feed;