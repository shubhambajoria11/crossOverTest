import React from 'react';
import {AuthorText, MainContiner, TopicText} from './styled';

const Author: React.FC = ({author, description}) => {
  return (
    <MainContiner>
      <AuthorText>{author}</AuthorText>
      <TopicText>{description}</TopicText>
    </MainContiner>
  );
};

export default Author;
