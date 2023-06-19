import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {rh, rpx, rw} from '../../styles/Dimen';

export const MainContiner = styled.View`
  width: ${rw(375)}px;
  flex: 1;
  background-color: ${colors.darkBlack};
  align-items: center;
  flex-direction: row;
  height: ${rh(36)}px;
  padding-horizontal: ${rw(12)}px;
  justify-content: space-between;
`;
export const HorizonalRow = styled.View`
  flex-direction: row;
`;

export const IconTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const PlaylistNameText = styled.Text`
  color: ${colors.white};
  margin-left: ${rw(4)}px;
  font-weight: 600;
  font-size: ${rpx(13)}px;
  line-height: ${rh(16)}px;
  align-items: center;
`;
