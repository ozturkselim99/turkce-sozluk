import React, {useEffect, useState, useRef, useContext} from 'react';
import {Keyboard} from 'react-native';

import {Search, Close} from './icons';

import {Box, Input, Text, Button} from './shared';

import theme from '../utils/theme';
import searchContext from '../context/search';

function SearchBox({onChangeFocus}) {
  const searchData = useContext(searchContext);
  const [isFocus, setFocus] = React.useState(false);

  React.useEffect(() => {
    onChangeFocus(isFocus);
  }, [isFocus, onChangeFocus]);

  const onCancel = () => {
    searchData.setKeyword('');
    setFocus(false);
    Keyboard.dismiss();
  };

  const onClear = () => {
    searchData.setKeyword('');
  };

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4,
            },
          }}
          bg="white"
          height={52}
          color="textDark"
          borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
          placeholder="Türkçe Sözlük’te Ara"
          placeholderTextColor="textMedium"
          pl={52}
          borderRadius="normal"
          value={searchData.keyword}
          onFocus={() => setFocus(true)}
          onChangeText={text => searchData.setKeyword(text)}
        />
        {searchData.keyword.length > 0 && (
          <Button onPress={onClear} position="absolute" right={16} top={14}>
            <Close color={theme.colors.textDark} />
          </Button>
        )}
        <Button position="absolute" left={16} top={14}>
          <Search color={theme.colors.textMedium} />
        </Button>
      </Box>
      {isFocus && (
        <Button onPress={onCancel} px={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  );
}
export default SearchBox;
