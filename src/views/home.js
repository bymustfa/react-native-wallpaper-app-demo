import React, {useState, useEffect} from 'react';
import {FlatList, Image} from 'react-native';
import Box from '../components/box';
import Button from '../components/button';
import {createClient} from 'pexels';
import {TabActions} from '@react-navigation/native';
import Text from '../components/text';

function HomeScreen({navigation}) {
  const [datas, setDatas] = useState([]);

  const client = createClient(
    '563492ad6f9170000100000164e3f558a9794432be59a43f309190bb',
  );

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    const query = 'neon city';
    await client.photos.search({query, per_page: 100}).then((photos) => {
      setDatas(photos.photos);
    });
  };

  const renderItem = (data) => {
    const {item} = data;
    return (
      <Box width={'50%'} p={4}>
        <Box mb={15} bg="white" height={300} borderRadius={'normal'}>
          <Button
            onPress={() =>
              navigation.dispatch(
                TabActions.jumpTo('Detail', {
                  data: item,
                }),
              )
            }
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
    <Box bg={'bg'} flex={1}>
      <FlatList
        data={datas}
        numColumns={2}
        renderItem={renderItem}
        style={{padding: 15}}
        keyExtractor={(item, index) => index}
      />
    </Box>
  );
}

export default HomeScreen;
