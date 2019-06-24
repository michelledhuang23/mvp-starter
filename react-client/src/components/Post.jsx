import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 500px;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 10px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16);
`;

const Author = styled.p`
  color: #777777;
  font-size: 12px;
  margin: 10px 0;
`;

const PostBody = styled.div`
  margin: 5px 0;
`;

const Tags = styled.div`
  padding: 5px 0;
  margin: 5px 0;
`;

const Tag = styled.span`
  padding: 2px 4px 3px 4px;
  border-radius: 10px;
  color: #777777;
  border: 1px solid #777777;
  font-size: 10px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    background-color: #777777;
    color: #ffffff;
  }
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <CardContainer>
        <Author>Tianyu Li</Author>
        <PostBody>Hello World</PostBody>
        <Tags>
          <Tag>#facebook</Tag>
          <Tag>#naomi</Tag>
          <Tag>#cats</Tag>
        </Tags>
      </CardContainer>
    );
  }
}

export default Post;