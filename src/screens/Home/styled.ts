import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {rh, rpx, rw} from '../../styles/Dimen';

const abc = Dimensions.get('screen').height;

export const MainContainer = styled.View`
  background-color: ${colors.backgroundColor};
  flex: 1;
  border-color: ${colors.redPink};
  border-width: ${rpx(3)}px;
`;
export const HeaderContainer = styled.View`
  background-color: ${colors.darkBlack};
  flex-direction: row;
  justify-content: space-between;
  border-width: ${rpx(1)}px;
  border-color: ${colors.white};
  /* height: ${rh(80)}px; */
`;

export const HeaderTimerContainer = styled.View`
  flex-direction: row;
  margin: ${rpx(15)}px;
  border-width: ${rpx(1)}px;
  border-color: ${colors.redArchive};
`;

export const TimerText = styled.Text`
  color: ${colors.white};
  opacity: 0.6;
  margin-left: ${rw(3)}px;
`;

export const ClickableContainer = styled.TouchableOpacity``;

export const HeaderFollowTags = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FollowingText = styled.Text`
  color: ${colors.white};
  opacity: ${(props: {activeFlashCard: any}) => {
    return props.activeFlashCard === 'Following' ? 1 : 0.6;
  }};
  font-weight: ${(props: {activeFlashCard: any}) => {
    return props.activeFlashCard === 'Following' ? 700 : 300;
  }};
  border-width: ${rw(2)}px;
  border-color: ${colors.redPink};
`;
export const FollowText = styled.Text`
  color: ${colors.white};
  opacity: ${(props: {activeFlashCard: any}) => {
    return props.activeFlashCard === 'For You' ? 1 : 0.6;
  }};
  font-weight: ${(props: {activeFlashCard: any}) => {
    return props.activeFlashCard === 'For You' ? 700 : 300;
  }};
  margin-left: ${rw(20)}px;
  border-width: ${rw(2)}px;
  border-color: ${colors.redPink};
`;

export const HeaderSearch = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: ${rw(20)}px;
`;

export const QuestionsAnswersContainer = styled.TouchableOpacity`
  justify-content: center;
  margin-left: ${rw(16)}px;
  margin-top: ${rh(17)}px;
  margin-right: ${rw(65)}px;
  height: ${rh(500)}px;
  border-width: ${rw(1)}px;
`;

export const HorizontalLine = styled.View`
  width: ${rw(286)}px;
  height: 0;
  border-width: ${rw(0.5)}px;
  margin-top: ${rh(24)}px;
  border-color: ${colors.white};
`;

export const QuestionText = styled.Text`
  font-weight: 400;
  font-size: ${rpx(21)}px;
  line-height: ${rh(25)}px;
  align-items: center;
  color: ${colors.white};
`;

export const VerticalCardContainer = styled.View`
  position: absolute;
  bottom: ${rh(52)}px;
  right: ${rw(5)}px;
  justify-content: center;
  align-items: center;
`;

export const AuthorContainer = styled.View``;

export const PlaylistContainer = styled.View`
  position: absolute;
  bottom: 0;
`;

export const AnswerText = styled.Text`
  font-weight: 800;
  font-size: ${rpx(13)}px;
  line-height: ${rh(16)}px;
  color: ${colors.answerText};
  margin-top: ${rh(24)}px;
`;

export const Answer = styled.Text`
  font-weight: 400;
  font-size: ${rpx(21)}px;
  line-height: ${rh(25)}px;
  color: ${colors.white};
  margin-top: ${rh(4)}px;
  opacity: 0.6;
  height: ${rh(225)}px;
  flex-wrap: wrap;
`;

export const HowWellDidYouKnowThis = styled.Text`
  font-weight: 400;
  font-size: ${rpx(15)}px;
  line-height: ${rh(18)}px;
  color: ${colors.white};
  opacity: 0.6;
  margin-top: ${rh(30)}px;
`;

export const ContentContainer = styled.View`
  border-width: ${rpx(3)}px;
  border-color: ${colors.apple};
  height: ${abc - rh(155)}px;
  justify-content: space-between;
  justify-content: center;
  /* background-color: ${colors.darkBlack}; */
`;

export const ContentTopContainer = styled.View`
  border-width: ${rpx(3)}px;
  border-color: ${colors.blue};
`;
export const ContentBottomContainer = styled.View`
  flex: 1;
  /* border-width: ${rpx(3)}px;
  border-color: ${colors.white}; */
`;

export const ContentContainerForYou = styled.View`
  border-width: ${rpx(3)}px;
  border-color: ${colors.apple};
  height: ${abc - rh(155)}px;
  justify-content: space-between;
  justify-content: center;

  /* background-color: ${colors.darkBlack}; */
`;

export const OptionContainer = styled.View``;
