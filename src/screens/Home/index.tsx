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
  ContentContainerForYou,
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
import {Alert, FlatList} from 'react-native';
import Options from '../../component/Options/Options';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList} from '../../navigation/tabBarNavigation/TabBarNavigator';
import {IFollowing, IForYou} from '../types/types';
import {API_END_POINTS, BASE_URL} from '../../constants/server';
import {
  FOLLOWING,
  FOR_YOU,
  SOMETHING_WENT_WRONG,
} from '../../constants/strings';

export type NavigationHomeProps = NativeStackScreenProps<
  RootTabParamList,
  'Home'
>;

interface HomeProps extends NavigationHomeProps {
  // followingEachData: IFollowing[];
  // forYouEachData: IForYou[];
}

const Home: React.FC<HomeProps> = () => {
  const [followingEachData, setFollowingEachData] = useState<IFollowing[]>([]);
  const [forYouEachData, setForYouEachData] = useState<IForYou[]>([]);

  const [activeFlashCard, setActiveFlashCard] = useState<string>(FOLLOWING);

  const [activeClickForShowAnswer, setActiveClickForShowAnswer] =
    useState<boolean>(false);

  const [min, secs] = useCountTimer(1, true);

  const getFollowingQuestionsData = () => {
    api(BASE_URL + API_END_POINTS.following, {
      method: REQUEST_METHODS.GET,
    })
      .then((res: any) => {
        setFollowingEachData((prevData: IFollowing[]) => [
          ...prevData,
          res?.data,
        ]);
      })
      .catch(() => {
        Alert.alert(SOMETHING_WENT_WRONG);
      });
  };

  const getForYouQuestionsData = () => {
    api(BASE_URL + API_END_POINTS.forYou, {
      method: REQUEST_METHODS.GET,
    })
      .then((res: any) => {
        setForYouEachData((prevData: IForYou[]) => [...prevData, res?.data]);
      })
      .catch(() => {
        Alert.alert(SOMETHING_WENT_WRONG);
      });
  };

  useEffect(() => {
    if (activeFlashCard === FOR_YOU) {
      getForYouQuestionsData();
    } else {
      getFollowingQuestionsData();
    }
  }, [activeFlashCard]);

  const renderItem = ({item}: {item: IFollowing | IForYou | any}) => {
    return activeFlashCard === FOLLOWING ? (
      <ContentContainer>
        <ContentTopContainer>
          <QuestionsAnswersContainer
            onPress={() => {
              setActiveClickForShowAnswer(!activeClickForShowAnswer);
            }}>
            <QuestionText>{item.flashcard_front}</QuestionText>
            {activeClickForShowAnswer && <HorizontalLine />}
            {activeClickForShowAnswer && <AnswerText>Answer</AnswerText>}
            {activeClickForShowAnswer && <Answer>{item.flashcard_back}</Answer>}
            {activeClickForShowAnswer && (
              <HowWellDidYouKnowThis>
                How Well Did You Know This
              </HowWellDidYouKnowThis>
            )}
            {activeClickForShowAnswer && <HorizontalBoxes />}
          </QuestionsAnswersContainer>
          <AuthorContainer>
            <Author author={item.user?.name} description={item.description} />
          </AuthorContainer>
          <VerticalCardContainer>
            <VerticalCard />
          </VerticalCardContainer>
        </ContentTopContainer>
        <ContentBottomContainer>
          <PlaylistContainer>
            <Playlist playlistName={item.playlist} />
          </PlaylistContainer>
        </ContentBottomContainer>
      </ContentContainer>
    ) : (
      <ContentContainerForYou>
        <ContentTopContainer>
          <QuestionsAnswersContainer>
            <QuestionText>{item.question}</QuestionText>
            <Options option={item.options} />
          </QuestionsAnswersContainer>
          <AuthorContainer>
            <Author author={item.user?.name} description={item.description} />
          </AuthorContainer>
          <VerticalCardContainer>
            <VerticalCard />
          </VerticalCardContainer>
        </ContentTopContainer>
        <ContentBottomContainer>
          <PlaylistContainer>
            <Playlist playlistName={item.playlist} />
          </PlaylistContainer>
        </ContentBottomContainer>
      </ContentContainerForYou>
    );
  };

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
              setActiveFlashCard(FOLLOWING);
            }}>
            <FollowingText activeFlashCard={activeFlashCard}>
              Following
            </FollowingText>
          </ClickableContainer>
          <ClickableContainer
            activeFlashCard={activeFlashCard}
            onPress={() => {
              setActiveFlashCard(FOR_YOU);
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
      {activeFlashCard === FOLLOWING ? (
        <FlatList
          data={followingEachData}
          keyExtractor={(item, index) => item.id.toString() + index.toString()}
          renderItem={renderItem}
          onEndReached={getFollowingQuestionsData}
          onEndReachedThreshold={0.1}
        />
      ) : (
        <FlatList
          data={forYouEachData}
          keyExtractor={(item, index) => item.id.toString() + index.toString()}
          renderItem={renderItem}
          onEndReached={getForYouQuestionsData}
          onEndReachedThreshold={0.1}
        />
      )}
    </MainContainer>
  );
};

export default Home;
