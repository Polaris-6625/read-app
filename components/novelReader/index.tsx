import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';

type Props = {};

type PageItem = {
  id: number;
  content: string;
};

const NovelReader: React.FC<Props> = () => {
  // 模拟一大堆文字，储存在不同的页中
  const pages: PageItem[] = new Array(100).fill(null).map((_, index) => ({
    id: index,
    content: `第${index + 1}页: 小说真可爱，我要看小说，小说不给看，我就写小说……`,
  }));

  const renderItem = ({ item }: { item: PageItem }) => {
    return (
      <View style={styles.page}>
        <Text style={styles.text}>{item.content}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width: Dimensions.get('window').width,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default NovelReader;