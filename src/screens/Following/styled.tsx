import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {rh, rpx, rw} from '../../styles/Dimen';

export const MainContainer = styled.View`
  background-color: ${colors.backgroundColor};
  flex: 1;
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
  right: ${rw(5)};
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
