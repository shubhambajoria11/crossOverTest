import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {rh, rpx} from '../../styles/Dimen';

export const MainContainer = styled.TouchableOpacity`
  padding: ${rpx(12)}px;
  opacity: 0.5;
  background-color: ${colors.white};
  margin-top: ${rh(8)}px;
  margin-bottom: ${rh(8)}px;
  border-radius: ${rpx(8)}px;
`;

export const OptionText = styled.Text`
  font-size: ${rpx(17)}px;
  font-weight: 500;
  line-height: ${rh(20)}px;
`;
