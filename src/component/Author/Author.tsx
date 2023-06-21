import React from 'react';
import {AuthorText, MainContiner, TopicText} from './styled';

interface AuthorProps {
  author: string;
  description: string;
}

const Author: React.FC<AuthorProps> = ({author, description}) => {
  return (
    <MainContiner>
      <AuthorText>{author}</AuthorText>
      <TopicText>{description}</TopicText>
    </MainContiner>
  );
};

export default Author;
