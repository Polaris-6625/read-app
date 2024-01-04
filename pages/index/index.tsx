import React from 'react';
import { View , StyleSheet, Image , ScrollView , Dimensions, Text } from 'react-native';
import ReadComponents from '../../components/readCpmponents';
import { testData } from '../../components/readCpmponents/test';
import { ReadInfoType } from '../../types/type';
import Swiper from 'react-native-swiper';
import NovelReader from '../../components/novelReader';

const Index: React.FC = () => {
    const styles = StyleSheet.create({
        Index: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8
        },
        slide: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        wrapper:{},
        image: {
            height: '100%',
            width: "100%"
        }
      });
    // 获取屏幕宽度
    const screenWidth = Dimensions.get('window').width;

    // 获取屏幕高度
    const screenHeight = Dimensions.get('window').height;

    const testArr: Array<ReadInfoType> = new Array();
    testArr.push(testData);
    return (
        <View style={{width: '100%',height: screenHeight,display: 'flex',flexDirection: 'column',padding: '3.5%'}}>
            <Text>index</Text>
            <ReadComponents data={testArr}></ReadComponents>
            {/* <NovelReader></NovelReader> */}

        </View>
    )
}

export default Index;