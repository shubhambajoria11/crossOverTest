import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {rh, rpx, rw} from '../../styles/Dimen';

export const MainContainer = styled.View`
  flex-direction: row;
  margin-top: ${rh(8)}px;
`;
export const MainBox = styled.View`
  width: ${rw(50.8)}px;
  height: ${rh(52)}px;
  background-color: ${(props: {color: any}) => props.color};
  align-items: center;
  justify-content: center;
  margin-right: ${rpx(6)}px;
`;

export const NumberText = styled.Text`
  color: ${colors.white};
`;
