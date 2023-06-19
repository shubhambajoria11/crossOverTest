import React from 'react';
import {HorizonalRow, MainContiner, PlaylistNameText} from './styled';
import SVGIcon from '../../assets/svg/index';

const Playlist: React.FC = ({playlistName}) => {
  return (
    <MainContiner>
      <HorizonalRow>
        <SVGIcon.playlist width={20} height={16} strokeWidth={1.5} />
        <PlaylistNameText>Playlist: {playlistName}</PlaylistNameText>
      </HorizonalRow>
      <SVGIcon.greaterIcon width={12} height={12} strokeWidth={1.5} />
    </MainContiner>
  );
};

export default Playlist;
