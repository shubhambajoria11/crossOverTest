import React from 'react';
import {MainContainer} from './styled';
import SVGIcon from '../../assets/svg/index';

const VerticalCard = () => {
  return (
    <MainContainer>
      <SVGIcon.ellipse width={45} height={45} strokeWidth={1.5} />
      <SVGIcon.heart width={45} height={45} strokeWidth={1.5} />
      <SVGIcon.comment width={45} height={45} strokeWidth={1.5} />
      <SVGIcon.sidebarLabelicon width={45} height={45} strokeWidth={1.5} />
      <SVGIcon.share width={45} height={45} strokeWidth={1.5} />
      <SVGIcon.flip width={45} height={45} strokeWidth={1.5} />
    </MainContainer>
  );
};

export default VerticalCard;
