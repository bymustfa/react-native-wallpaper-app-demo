import React, {useState, useEffect} from 'react';
import {
  Image,
  ActivityIndicator,
  NativeModules,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';
import Box from '../components/box';
import Button from '../components/button';
import Text from '../components/text';
import Toast from 'react-native-simple-toast';
import {Bookmark, BookmarkSelected, ArrowLeft} from '../components/icons';
import {useTheme} from 'styled-components';

import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';

import {
  insertSelected,
  allSelected,
  deleteSelect,
} from '../databases/allSchemas';

function DetailScreen({navigation, route, ...props}) {
  const [src, setSrc] = useState('');
  const [selected, setSelected] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectBox, setSelectBox] = useState(false);

  const {data} = route.params;

  // const types = [
  //   {key: TYPE.HOME, title: 'Set as home screen'},
  //   {key: TYPE.LOCK, title: 'Set as lock screen'},
  //   {key: TYPE.BOTH, title: 'Apply to both'},
  // ];

  const theme = useTheme();

  useEffect(() => {
    setLoader(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getSelected();
    setSrc(data.src.portrait);
    setTimeout(() => {
      setLoader(false);
    }, 500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  const addToSelect = async () => {
    const selectedData = {
      id: data.id,
      photographer: data.photographer,
      src: JSON.stringify(data.src),
    };
    if (!selected) {
      insertSelected(selectedData);
    } else {
      deleteSelect(data.id);
    }
    setSelected(!selected);
  };

  const getSelected = async () => {
    allSelected().then((select) => {
      const selectets = JSON.parse(JSON.stringify(select));
      setSelected(selectets.filter((x) => x.id === data.id).length > 0);
    });
  };

  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        'Save remote Image',
        'Grant Me Permission to save Image',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } catch (err) {
      Alert.alert(
        'Save remote Image',
        'Failed to save Image: ' + err.message,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  const imageDownload = async () => {
    let newImgUri = src.lastIndexOf('/');
    let imageName = src.substring(newImgUri);

    let dirs = RNFetchBlob.fs.dirs;
    let path =
      Platform.OS === 'ios'
        ? dirs.MainBundleDir + imageName
        : dirs.PictureDir + imageName;

    if (Platform.OS === 'android') {
      const granted = await getPermissionAndroid();

      if (!granted) {
        return false;
      } else {
        RNFetchBlob.config({
          fileCache: true,
          appendExt: 'png',
          indicator: true,
          IOSBackgroundTask: true,
          path: path,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: path,
            description: 'Image',
          },
        })
          .fetch('GET', src)
          .then((res) => {
            console.log(res, 'end downloaded');
          });

        // RNFetchBlob.config({
        //   fileCache: true,
        //   appendExt: 'png',
        //   indicator: true,
        //   IOSBackgroundTask: true,
        //   path: path,
        //   addAndroidDownloads: {
        //     useDownloadManager: true,
        //     notification: true,
        //     path: path,
        //     description: 'Image',
        //   },
        // })
        //   .fetch('GET', src)
        //   .then((res) => {
        //     console.log(res, 'end downloaded');
        //   })
        //   .catch((err) => console.error(err));
      }
    } else {
      await CameraRoll.saveToCameraRoll(src);
    }
  };

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg={'bg'}>
      {loader && (
        <Box
          position={'absolute'}
          left={0}
          top={0}
          width={'100%'}
          height={'100%'}
          alignItems={'center'}
          flex={1}
          flexDirection={'row'}
          justifyContent={'center'}
          bg={'loaderBg'}
          zIndex={555}>
          <ActivityIndicator size="large" color="white" />
        </Box>
      )}

      {data && src.length > 0 && (
        <Image
          style={{height: '100%', width: '100%'}}
          source={{
            uri: src,
          }}
        />
      )}

      <Box
        position={'absolute'}
        width={'100%'}
        left={0}
        top={15}
        flexDirection="row"
        justifyContent="space-between"
        p={15}>
        <Button
          activeOpacity={0.7}
          borderRadius={'button'}
          border={'1px solid #ccc'}
          p={5}
          bg={'opacity'}
          onPress={() => {
            setSrc('');
            navigation.goBack();
          }}>
          <ArrowLeft width={18} height={18} color={theme.colors.buttonText} />
        </Button>
      </Box>

      <Box
        position={'absolute'}
        width={'100%'}
        left={0}
        bottom={15}
        flexDirection="row"
        justifyContent="space-between"
        p={15}>
        <Button
          activeOpacity={0.7}
          borderRadius={'button'}
          border={'1px solid #ccc'}
          px={25}
          py={5}
          bg={'opacity'}
          onPress={() => imageDownload()}>
          <Text fontSize={14} color="buttonText">
            Download
          </Text>
        </Button>

        <Button
          activeOpacity={0.7}
          borderRadius={'button'}
          border={'1px solid #ccc'}
          p={5}
          bg={'opacity'}
          onPress={() => addToSelect()}>
          {selected ? (
            <BookmarkSelected color={theme.colors.buttonText} />
          ) : (
            <Bookmark color={theme.colors.buttonText} />
          )}
        </Button>
      </Box>

      {/*{selectBox && (*/}
      {/*  <Button*/}
      {/*    zIndex={900}*/}
      {/*    position="absolute"*/}
      {/*    bg="loaderBg"*/}
      {/*    left={0}*/}
      {/*    right={0}*/}
      {/*    top={0}*/}
      {/*    bottom={0}*/}
      {/*    onPress={() => setSelectBox(false)}>*/}
      {/*    <Box*/}
      {/*      witdh="100%"*/}
      {/*      height="30%"*/}
      {/*      bg="bg"*/}
      {/*      position="absolute"*/}
      {/*      zIndex={901}*/}
      {/*      left={0}*/}
      {/*      right={0}*/}
      {/*      bottom={-25}*/}
      {/*      borderRadius="button">*/}
      {/*      {types.map((type) => (*/}
      {/*        <Button*/}
      {/*          witdh="100%"*/}
      {/*          height={50}*/}
      {/*          mb={8}*/}
      {/*          justifyContent="flex-start"*/}
      {/*          pl={15}*/}
      {/*          key={type.key}*/}
      {/*          onPress={() => imageDownload(type.key)}*/}
      {/*          activeOpacity={0.7}>*/}
      {/*          <Text fontSize={18} fontWeight="bold">*/}
      {/*            {type.title}*/}
      {/*          </Text>*/}
      {/*        </Button>*/}
      {/*      ))}*/}
      {/*    </Box>*/}
      {/*  </Button>*/}
      {/*)}*/}
    </Box>
  );
}

export default DetailScreen;
