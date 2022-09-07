import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IRedditPost} from '../core/interfaces/reddit';
import {fetchRedditList} from '../redux/actions/user';
import {combinedAppState} from '../redux/reducers';

const Home = () => {
  const dispatch = useDispatch();

  const loading = useSelector(
    (state: combinedAppState) => state.redditReducer.loading,
  );
  const redditList = useSelector(
    (state: combinedAppState) => state.redditReducer.redditList,
  );

  useEffect(() => {
    dispatch(fetchRedditList());
  }, [dispatch]);

  const renderReddit = (post: IRedditPost) => {
    return (
      <TouchableOpacity style={styles.post}>
        <Text>{post.author_fullname}</Text>
        <Text>{post.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {!loading && (
        <FlatList
          data={redditList}
          renderItem={item => renderReddit(item.item)}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  post: {
    width: '95%',
    borderWidth: 1,
  },
});
