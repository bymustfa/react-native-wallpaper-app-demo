import React, {useEffect, useState} from 'react';
import {FlatList, Image} from 'react-native';
import Box from '../components/box';
import Button from '../components/button';
import Text from '../components/text';
import {allSelected} from '../databases/allSchemas';

function SelectedScreen({navigation, route}) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getSelected();
    });
    return unsubscribe;
  }, [navigation]);

  const getSelected = async () => {
    allSelected().then((select) => {
      const selectets = JSON.parse(JSON.stringify(select));
      selectets.map((x) => (x.src = JSON.parse(x.src)));
      setDatas(selectets);
    });
  };

  const renderItem = (data) => {
    const {item} = data;
    const randomHeight = Math.ceil(Math.random() * (650 - 600) + 600);
    const randomHeight2 = Math.ceil(Math.random() * (200 - 250) + 230);
    return (
      <Box width={'50%'} p={4}>
        <Box mb={15} bg="white" height={300} borderRadius={'normal'}>
          <Button
            onPress={() =>
              navigation.navigate('Detail', {
                data: item,
              })
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
            </Box>
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box bg={'bg'} flex={1}>
      {datas.length > 0 ? (
        <FlatList
          data={datas}
          numColumns={2}
          renderItem={renderItem}
          style={{padding: 15}}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <Box
          flexDirection={'row'}
          flex={1}
          alignItems={'center'}
          justifyContent={'center'}>
          <Text fontSize={25} color="textColors" fontStyle="italic">
            No data
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default SelectedScreen;
