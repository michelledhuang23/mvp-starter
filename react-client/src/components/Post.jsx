import React from 'react';
import styled from 'styled-components';
import MarkDown from 'markdown-react-js';
import moment from 'moment';

const CardContainer = styled.div`
  width: 20%;
  min-width: 415px;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16);
  margin-bottom: 20px;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 5px 5px 0 rgba(0,0,0,0.16);
  }
`;

const Author = styled.p`
  color: #385898;
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 0;
`;

const DateStyled = styled.p`
  color: #777777;
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 0;
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
  
  formatDate() {
    const day = this.props.post.created_at.split('T')[0];
    const time = this.props.post.created_at.split('T')[1];
    const datetime = day + ':' + time;
    var format = new Date(datetime);
    return moment(format).format('lll');
  }
  render() {
    return (
      <CardContainer>
        <Author>{this.props.post.user_name}</Author>
        <DateStyled>{this.formatDate()}</DateStyled>
        <PostBody>
          <MarkDown text={this.props.post.content} />
        </PostBody>
        <Tags>
        {this.props.post.tags.split(' ').map((tag, i) => {
          return <Tag key={'tag-' + i}>{tag}</Tag>
        })}
        </Tags>
      </CardContainer>
    );
  }
}

export default Post;