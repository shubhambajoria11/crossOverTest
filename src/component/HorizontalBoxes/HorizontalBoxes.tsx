import {View, Text} from 'react-native';
import React from 'react';
import {MainBox, MainContainer, NumberText} from './styled';
import colors from '../../styles/colors';

const SingleElement = ({color, number}) => {
  return (
    <MainBox color={color}>
      <NumberText>{number}</NumberText>
    </MainBox>
  );
};

const HorizontalBoxes = () => {
  return (
    <MainContainer>
      <SingleElement color={colors.firstBox} number="1" />
      <SingleElement color={colors.secondBox} number="2" />
      <SingleElement color={colors.thirdBox} number="3" />
      <SingleElement color={colors.fourthBox} number="4" />
      <SingleElement color={colors.fifthBox} number="5" />
    </MainContainer>
  );
};

export default HorizontalBoxes;
