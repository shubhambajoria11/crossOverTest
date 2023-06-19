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
  ClickableContainer,
  ContentBottomContainer,
  ContentContainer,
  ContentTopContainer,
  FollowingText,
  FollowText,
  HeaderContainer,
  HeaderFollowTags,
  HeaderSearch,
  HeaderTimerContainer,
  HorizontalLine,
  HowWellDidYouKnowThis,
  MainContainer,
  PlaylistContainer,
  QuestionsAnswersContainer,
  QuestionText,
  TimerText,
  VerticalCardContainer,
} from './styled';
import SVGIcon from '../../assets/svg/index';
import useCountTimer from '../../component/timerHook/useCountTimer';
import {Alert, FlatList, View, Text, Dimensions} from 'react-native';

const Home: React.FC = () => {
  const [followingEachData, setFollowingEachData] = useState<string[]>([]);
  const [forYouEachData, setForYouEachData] = useState<string[]>([]);

  const [question, setQuestion] = useState();
  const [playlistName, setPlaylistName] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const [answer, setAnswer] = useState();
  const [activeFlashCard, setActiveFlashCard] = useState('Following');

  const [activeClickForShowAnswer, setActiveClickForShowAnswer] =
    useState(false);

  const [min, secs] = useCountTimer(1, true);

  const getFollowingQuestionsData = () => {
    api('https://cross-platform.rp.devfactory.com/following', {
      method: REQUEST_METHODS.GET,
    })
      .then(res => {
        setFollowingEachData(prevData => [...prevData, res?.data]);
        console.log('following', res?.data?.flashcard_back);
        setQuestion(res?.data?.flashcard_front);
        setPlaylistName(res?.data?.playlist);
        setAuthor(res?.data?.user?.name);
        setDescription(res?.data?.description);
        setAnswer(res?.data?.flashcard_back);
      })
      .catch(() => {
        Alert.alert('Something went wrong. Please try again !!');
      });
  };

  const getForYouQuestionsData = () => {
    api('https://cross-platform.rp.devfactory.com/for_you', {
      method: REQUEST_METHODS.GET,
    })
      .then(res => {
        console.log('for you', res?.data);
        // setForYouEachData(pre => [...pre, res?.data]);
      })
      .catch(() => {
        Alert.alert('Something went wrong. Please try again !!');
      });
  };

  useEffect(() => {
    if (activeFlashCard === 'For You') {
      getForYouQuestionsData();
    } else {
      getFollowingQuestionsData();
    }
  }, [activeFlashCard]);

  const renderItem = ({item}) => {
    console.log('item', item);
    return (
      <ContentContainer>
        <ContentTopContainer>
          {activeFlashCard === 'Following' ? (
            <QuestionsAnswersContainer
              onPress={() => {
                setActiveClickForShowAnswer(!activeClickForShowAnswer);
              }}>
              <QuestionText>{item.flashcard_front}</QuestionText>
              {activeClickForShowAnswer && <HorizontalLine />}
              {activeClickForShowAnswer && <AnswerText>Answer</AnswerText>}
              {activeClickForShowAnswer && (
                <Answer>{item.flashcard_back}</Answer>
              )}
              {activeClickForShowAnswer && (
                <HowWellDidYouKnowThis>
                  How Well Did You Know This
                </HowWellDidYouKnowThis>
              )}
              {activeClickForShowAnswer && <HorizontalBoxes />}
            </QuestionsAnswersContainer>
          ) : (
            <QuestionsAnswersContainer>
              <QuestionText>For you question</QuestionText>
            </QuestionsAnswersContainer>
          )}

          <AuthorContainer>
            <Author author={author} description={description} />
          </AuthorContainer>
          <VerticalCardContainer>
            <VerticalCard />
          </VerticalCardContainer>
        </ContentTopContainer>
        <ContentBottomContainer>
          <PlaylistContainer>
            <Playlist playlistName={playlistName} />
          </PlaylistContainer>
        </ContentBottomContainer>
      </ContentContainer>
    );
  };

  // const renderItem = ({item}) => {
  //   return (
  // <View style={{flex: 1, borderWidth: 1, borderColor: 'red'}}>
  //   {activeFlashCard === 'Following' ? (
  //     <QuestionsAnswersContainer
  //       onPress={() => {
  //         setActiveClickForShowAnswer(!activeClickForShowAnswer);
  //       }}>
  //       <QuestionText>{item.flashcard_front}</QuestionText>
  //       {activeClickForShowAnswer && <HorizontalLine />}
  //       {activeClickForShowAnswer && <AnswerText>Answer</AnswerText>}
  //       {activeClickForShowAnswer && <Answer>{answer}</Answer>}
  //       {activeClickForShowAnswer && (
  //         <HowWellDidYouKnowThis>
  //           How Well Did You Know This
  //         </HowWellDidYouKnowThis>
  //       )}
  //       {activeClickForShowAnswer && <HorizontalBoxes />}
  //     </QuestionsAnswersContainer>
  //   ) : (
  //     <QuestionsAnswersContainer>
  //       <QuestionText>For you question</QuestionText>
  //     </QuestionsAnswersContainer>
  //   )}
  //   <VerticalCardContainer>
  //     <VerticalCard />
  //   </VerticalCardContainer>
  //   <AuthorContainer>
  //     <Author author={author} description={description} />
  //   </AuthorContainer>
  //   <PlaylistContainer>
  //     <Playlist playlistName={playlistName} />
  //   </PlaylistContainer>
  // </View>
  //   );
  // };

  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderTimerContainer>
          <SVGIcon.activity
            width={20}
            height={16}
            strokeWidth={1.5}
            fillOpacity={0.5}
          />
          <TimerText>
            {min}:{secs}
          </TimerText>
        </HeaderTimerContainer>
        <HeaderFollowTags>
          <ClickableContainer
            activeFlashCard={activeFlashCard}
            onPress={() => {
              setActiveFlashCard('Following');
            }}>
            <FollowingText activeFlashCard={activeFlashCard}>
              Following
            </FollowingText>
          </ClickableContainer>
          <ClickableContainer
            activeFlashCard={activeFlashCard}
            onPress={() => {
              setActiveFlashCard('For You');
            }}>
            <FollowText activeFlashCard={activeFlashCard}>For You</FollowText>
          </ClickableContainer>
        </HeaderFollowTags>
        <HeaderSearch>
          <SVGIcon.activity
            width={20}
            height={16}
            strokeWidth={1.5}
            fillOpacity={0.5}
          />
        </HeaderSearch>
      </HeaderContainer>
      <FlatList
        // data={[1]}
        data={followingEachData}
        style={{flexGrow: 1}}
        keyExtractor={(item, index) => item.id + index}
        renderItem={renderItem}
        onEndReached={getFollowingQuestionsData}
        onEndReachedThreshold={0.1}
        // contentContainerStyle={{flex: 1}}
      />

      {/* {activeFlashCard === 'Following' ? (
        <QuestionsAnswersContainer
          onPress={() => {
            setActiveClickForShowAnswer(!activeClickForShowAnswer);
          }}>
          <QuestionText>{question}</QuestionText>
          {activeClickForShowAnswer && <HorizontalLine />}
          {activeClickForShowAnswer && <AnswerText>Answer</AnswerText>}
          {activeClickForShowAnswer && <Answer>{answer}</Answer>}
          {activeClickForShowAnswer && (
            <HowWellDidYouKnowThis>
              How Well Did You Know This
            </HowWellDidYouKnowThis>
          )}
          {activeClickForShowAnswer && <HorizontalBoxes />}
        </QuestionsAnswersContainer>
      ) : (
        <QuestionsAnswersContainer>
          <QuestionText></QuestionText>
        </QuestionsAnswersContainer>
      )}

      <VerticalCardContainer>
        <VerticalCard />
      </VerticalCardContainer>
      <AuthorContainer>
        <Author author={author} description={description} />
      </AuthorContainer>
      <PlaylistContainer>
        <Playlist playlistName={playlistName} />
      </PlaylistContainer> */}
    </MainContainer>
  );
};

export default Home;
