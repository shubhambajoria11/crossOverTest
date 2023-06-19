import React, {useEffect, useState} from 'react';
import Author from '../../component/Author/Author';
import HorizontalBoxes from '../../component/HorizontalBoxes/HorizontalBoxes';
import Playlist from '../../component/playlist/Playlist';
import VerticalCard from '../../component/VericalCard/VerticalCard';
import api from '../../utils/api';
import {REQUEST_METHODS} from '../../utils/constants';
import {
  Answer,
  AnswerText,
  AuthorContainer,
  HorizontalLine,
  HowWellDidYouKnowThis,
  MainContainer,
  PlaylistContainer,
  QuestionsAnswersContainer,
  QuestionText,
  VerticalCardContainer,
} from './styled';

const Following: React.FC = () => {
  const [question, setQuestion] = useState();
  const [playlistName, setPlaylistName] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const [answer, setAnswer] = useState();

  const [active, setActive] = useState(false);

  const getQuestions = () => {
    api('https://cross-platform.rp.devfactory.com/following', {
      method: REQUEST_METHODS.GET,
    })
      .then(res => {
        console.log(res?.data?.flashcard_back);
        setQuestion(res?.data?.flashcard_front);
        setPlaylistName(res?.data?.playlist);
        setAuthor(res?.data?.user?.name);
        setDescription(res?.data?.description);
        setAnswer(res?.data?.flashcard_back);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getQuestions();
  }, []);

  console.log('answer', answer);
  return (
    <MainContainer>
      <QuestionsAnswersContainer
        onPress={() => {
          setActive(!active);
        }}>
        <QuestionText>{question}</QuestionText>
        {active && <HorizontalLine />}
        {active && <AnswerText>Answer</AnswerText>}
        {active && <Answer>{answer}</Answer>}
        {active && (
          <HowWellDidYouKnowThis>
            How Well Did You Know This
          </HowWellDidYouKnowThis>
        )}
        {active && <HorizontalBoxes />}
      </QuestionsAnswersContainer>
      <VerticalCardContainer>
        <VerticalCard />
      </VerticalCardContainer>
      <AuthorContainer>
        <Author author={author} description={description} />
      </AuthorContainer>
      <PlaylistContainer>
        <Playlist playlistName={playlistName} />
      </PlaylistContainer>
    </MainContainer>
  );
};

export default Following;
