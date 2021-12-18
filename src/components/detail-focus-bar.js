import React, {useRef, useEffect} from 'react';
import {Box, Text, Button} from './shared';
import {FlatList} from 'react-native';

const DetailFocusBar = ({tabs, selected, onPress}) => {
  const list_ref = useRef();

  useEffect(() => {
    list_ref.current.scrollToIndex({
      index: tabs.findIndex(el => el.id === selected),
    });
  }, [selected, tabs]);

  return (
    <Box height={24} mb={8} width="100%">
      <FlatList
        ref={list_ref}
        style={{
          width: '100%',
          height: '100%',
        }}
        horizontal={true}
        data={tabs}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Box px={16} flex={1} height={24}>
            <Button
              width="100%"
              onPress={() => {
                onPress(item.id);
                list_ref.current.scrollToIndex({
                  index: tabs.findIndex(el => el === item),
                });
              }}>
              <Text
                fontWeight="bold"
                color={selected === item.id ? 'blue' : '#758291'}>
                {item.title}
              </Text>
            </Button>
            {selected === item.id && (
              <Box height={2} width={24} bg="blue" mx="auto" mt="auto" />
            )}
          </Box>
        )}
      />
    </Box>
  );
};

export default DetailFocusBar;
