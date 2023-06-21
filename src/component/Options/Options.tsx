import {View, FlatList} from 'react-native';
import React from 'react';
import {rh} from '../../styles/Dimen';
import {MainContainer, OptionText} from './styled';
import {IOption} from '../../screens/types/types';

interface OptionsProps {
  option: any;
}

interface IItemProp {
  item: IOption;
}

const Options: React.FC<OptionsProps> = ({option}) => {
  const renderItem: React.FC<IItemProp> = ({item}) => {
    console.log('item-->1', item);
    return (
      <MainContainer>
        <OptionText>{item.answer}</OptionText>
      </MainContainer>
    );
  };

  return (
    <View style={{marginTop: rh(150)}}>
      <FlatList
        data={option}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Options;
