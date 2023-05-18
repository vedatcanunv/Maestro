import React from 'react';
import {SafeAreaView, ScrollView, Dimensions, Text} from 'react-native';
import HTML from 'react-native-render-html';

import Style from './Details.style';

const Details = ({route}) => {
  const {post} = route.params; // Context üzerinden veriler çekildi

  const windowWidth = Dimensions.get('window').width;
  const htmlWidth = windowWidth - 100;

  const tagsStyles = {
    // Fiziksel cihazda çalıştırdığımda html verilerinin okunmama durumu oluyordu bu yüzden renk tanımlamam gerekti
    p: {color: 'black'},
    strong: {color: 'red', fontWeight: 'bold'},
    h: {color: 'black'},
    ul: {color: 'black'},
    h1: {color: 'black'},
  };

  return (
    <SafeAreaView style={Style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HTML
          source={{html: post.content}}
          contentWidth={htmlWidth}
          tagsStyles={tagsStyles}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
