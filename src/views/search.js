import React, {useState, useEffect} from 'react';
import {FlatList, Image, Modal} from 'react-native';
import Box from '../components/box';
import Button from '../components/button';
import Text from '../components/text';

import categories from '../utils/categories';

function SearchScreen({navigation, ...props}) {
  const [modalVisible, setModalVisible] = useState(false);

  const {photos} = props;

  useEffect(() => {
    if (photos && photos.length > 0) {
      setModalVisible(true);
    }
  }, [photos]);

  const renderItem = (data) => {
    const {item} = data;

    return (
      <Box width={'50%'} p={4}>
        <Box mb={15} bg="white" height={75} borderRadius={'normal'}>
          <Button
            onPress={() => {
              props.setKey(item.value);
            }}
            flexDirection={'column'}
            alignItems={'flex-start'}
            activeOpacity={0.8}>
            <Image
              style={{height: '100%', width: '100%', borderRadius: 6}}
              source={{
                uri: item.coverImage,
              }}
            />
            <Box
              position={'absolute'}
              left={0}
              top={0}
              height={'100%'}
              alignItems={'center'}
              flexDirection={'row'}
              pl={10}>
              <Text
                fontSize={20}
                color="white"
                style={{
                  textShadowColor: 'rgb(0,0,0)',
                  textShadowOffset: {width: -2, height: 2},
                  textShadowRadius: 10,
                }}>
                {item.title}
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>
    );
  };

  const photoItem = (data) => {
    const {item} = data;
    return (
      <Box width={'50%'} p={4}>
        <Box mb={15} bg="white" height={300} borderRadius={'normal'}>
          <Button
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('Detail', {
                data: item,
              });
            }}
            flexDirection={'column'}
            alignItems={'flex-start'}
            activeOpacity={0.8}>
            <Image
              style={{height: '91%', width: '100%'}}
              source={{
                uri: item.src.portrait,
              }}
            />
            <Box
              p={3}
              px={8}
              width={'100%'}
              flexDirection={'row'}
              justifyContent="space-between">
              <Box>
                <Text fontSize={13}>{item.photographer}</Text>
              </Box>
              {/*<Box flexDirection={'row'}>*/}
              {/*  <ImageIcon color={'#000'} height={20} wşdth={20} />*/}
              {/*  <Text>4</Text>*/}
              {/*</Box>*/}
            </Box>
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg={'bg'}>
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={renderItem}
        style={{padding: 15}}
        keyExtractor={(item, index) => index}
      />

      <Modal
        animationType="slide"
        transparent={false}
        style={{height: '90%', backgroundColor: 'red'}}
        visible={modalVisible}>
        <Box
          bg={'bg'}
          height={'93%'}
          bottom={0}
          position={'absolute'}
          left={0}
          right={0}
          width={'100%'}>
          <FlatList
            data={photos}
            numColumns={2}
            renderItem={photoItem}
            style={{padding: 15}}
            keyExtractor={(item, index) => index}
          />
        </Box>
      </Modal>
    </Box>
  );
}

export default SearchScreen;
