import React from 'react';
import styled from 'styled-components';
import Post from './Post.jsx';

const FeedContainer = styled.div`
  max-height: 800px;
  margin: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
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