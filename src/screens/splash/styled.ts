import styled from 'styled-components/native';
import {rh, rw} from '../../styles/Dimen';
import colors from '../../styles/colors';

export const OuterContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.white};
`;

export const FyxImage = styled.Image`
  width: ${rw(123.47)}px;
  height: ${rh(118.47)}px;
  margin-top: ${rh(267)}px;
`;

export const TikTokContainer = styled.View`
  flex: 1;
  margin-top: ${rh(251)}px;
`;
