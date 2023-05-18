import React, {useEffect, useState, useRef} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import Error from '../../components/Error/Error';
import {UseCustomContext} from '../../context/context';
import BlogCard from '../../components/BlogCard/BlogCard';
import {Alert} from 'react-native';

import Styles from './Home.style';

const Home = ({navigation}) => {
  const {
    provideData,
    error,
    fetchData,
    refreshing,
    setRefreshing,
    setProvideData,
  } = UseCustomContext();
  const [page, setPage] = useState(1);
  const flatListRef = useRef(null); // FlatList referansını tutmak için bir referans objesi oluşturdum

  const mappedData = provideData ? provideData.map(item => item) : [];

  const handleBlogCardSelect = postId => {
    // Hangi postun seçildiğini kontrol eder ve veriyi gönderir
    const selectedPost = provideData.find(item => item.postId === postId);
    navigation.navigate('Details', {
      post: selectedPost,
    });
  };

  const renderData = ({item}) => (
    <BlogCard data={item} onSelect={() => handleBlogCardSelect(item.postId)} />
  );

  const handleRefresh = () => {
    // sayfanın üst kısmından sayfayı yenilemeyi sağlar
    setPage(1);
    setRefreshing(true);
    setProvideData([]);
    fetchData(1);
  };

  const handleLoadMore = async () => {
    // Sayfanın sonuna yaklaştığında eğer bir sonraki sayfada veri varsa onu döndürür yoksa bir pop-up çıkarır ve sayfanın başına gönderir
    if (!refreshing) {
      setPage(prevPage => {
        if (prevPage === 3) {
          return fetchData(prevPage + 1)
            .then(data => {
              if (!data || !data.result || data.result.length === 0) {
                Alert.alert('Tüm gönderileri gördünüz', '', [
                  {text: 'Sayfanın başına dön', onPress: handleRefresh},
                ]);
                return 1;
              } else {
                return prevPage + 1;
              }
            })
            .catch(error => {
              console.log('Veri getirme hatası:', error);
              return prevPage;
            });
        } else {
          return prevPage + 1;
        }
      });
    }
  };

  useEffect(() => {
    // verinin sayfalar şeklinde yenilenmesini sağlar
    fetchData(page);
  }, [page]);

  useEffect(() => {
    // refreshing değeri değiştiğinde FlatList'in en üstüne kaydırır
    if (!refreshing && flatListRef.current) {
      flatListRef.current.scrollToOffset({offset: 0});
    }
  }, [refreshing]);

  if (error) {
    // sayfada bir hata olduğunda ekrana bir animasyon çıkarır
    return <Error />;
  }

  return (
    <View style={Styles.container}>
      <FlatList
        ref={flatListRef} // FlatList referansını kaydedilir
        showsVerticalScrollIndicator={false}
        style={Styles.myFlatListStyle}
        data={mappedData}
        renderItem={renderData}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default Home;
