import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {rh, rpx, rw} from '../../styles/Dimen';

export const MainContiner = styled.View`
  margin-top: ${rh(24)}px;
  padding: ${rpx(10)}px;
`;
export const HorizonalRow = styled.View`
  flex-direction: row;
`;

export const IconTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const AuthorText = styled.Text`
  color: ${colors.white};
  margin-left: ${rw(4)}px;
  font-weight: 600;
  font-size: ${rpx(13)}px;
  line-height: ${rh(16)}px;
  align-items: center;
`;
export const TopicText = styled.Text`
  margin-top: ${rh(8)}px;
  color: ${colors.white};
  margin-left: ${rw(4)}px;
  font-weight: 400;
  font-size: ${rpx(12)}px;
  line-height: ${rh(14)}px;
  align-items: center;
  opacity: 0.9;
`;
