import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from './BlogCard.style';

const BlogCard = ({data, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={Style.container}>
        <Image style={Style.banner} source={{uri: data.banner}} />
        <View style={Style.bodyContainer}>
          <Text numberOfLines={3} style={Style.title}>
            {data.title}
          </Text>
          <Text style={Style.summary}>{data.summary}</Text>
          <Text style={Style.totalReadingTime}>
            Reading time {Math.abs(data.totalReadingTime)} minute
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BlogCard;
