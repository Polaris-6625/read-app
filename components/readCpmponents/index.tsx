import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import type { ReadInfoType } from "../../types/type";
import { containerHeight, containerWigth } from "./data";
import Swiper from "react-native-swiper";

const Styles = StyleSheet.create({
  artText: {
    fontSize: containerWigth * 0.1,
    lineHeight: containerWigth * 0.1,
    letterSpacing: 0,
  },
  container: {
    width: containerWigth,
    height: containerHeight,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width: containerWigth,
    // height: containerHeight,
  },
  wrapper: {},
  image: {
    height: "100%",
    width: "100%",
  },
});

const sliceContent = (content: string, maxLength: number) => {
    let position = 0;
    const pages = [];
  
    while (position < content.length) {
      // Initialize the slice length to the maximum length for the page
      let sliceLength = maxLength;
      let newlinesCount = 0;
  
      // Calculate the number of newline characters in the current slice
      for (let i = position; i < content.length && i < position + sliceLength; i++) {
        if (content[i] === '\n') {
          newlinesCount++;
        }
      }
  
      // Adjust the slice length based on the number of newlines
      sliceLength -= newlinesCount * 9;
  
      // Cut the slice from the content
      let sliceEnd = position + sliceLength;
      let slice = content.substring(position, sliceEnd);
  
      pages.push(slice);
      position = sliceEnd;
  
      // Skip over any newline at the current slice end
      if (position < content.length && content[position] === '\n') {
        position++;
      }
    }
  
    return pages;
  };
  
  const ReadComponents: React.FC<{ data: Array<ReadInfoType> }> = (props) => {
    return (
      <View style={Styles.container}>
        <Swiper autoplay={false} autoplayTimeout={3}>
          {props.data.flatMap((item, index) => {
            // Call the function to slice the content
            const pages = sliceContent(item.artContent, 180);
  
            return pages.map((pageContent, pageIndex) => {
              // Split the content by newlines to render them correctly
              const lines = pageContent.split('\n').map((line, lineIndex) => (
                <Text style={Styles.artText} key={`line-${index}-${pageIndex}-${lineIndex}`}>
                  {line}
                </Text>
              ));
  
              return (
                <View style={Styles.slide} key={`slide-${index}-${pageIndex}`}>
                  {lines}
                </View>
              );
            });
          })}
        </Swiper>
      </View>
    );
  };
  
  export default ReadComponents;
