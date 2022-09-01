import React from 'react';
import {Button, FlatList, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearAll, fetchUserById, fetchUsers} from '../redux/actions/user';
import {combinedAppState} from '../redux/reducers';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(
    (state: combinedAppState) => state.userReducer.users,
  );
  const userById = useSelector(
    (state: combinedAppState) => state.userReducer.userById,
  );
  const loading = useSelector(
    (state: combinedAppState) => state.userReducer.loading,
  );

  const pressedGetList = () => {
    console.log('pressedGetList', users);
    dispatch(fetchUsers());
    console.log(users);
  };

  const pressedGetById = () => {
    console.log('pressedGetById', userById);
    dispatch(fetchUserById('1'));
    console.log('pressedGetById', userById);
  };

  const pressedClearAll = () => {
    console.log('pressedClearAll');
    dispatch(clearAll());
  };

  const renderUser = (user: string) => <Text>{user}</Text>;

  return (
    <SafeAreaView>
      <Text>PROVA</Text>
      <Button title="Get List" onPress={pressedGetList} />
      {loading && <Text>Caricando</Text>}
      {!loading && users.length > 0 && (
        <FlatList data={users} renderItem={item => renderUser(item.item)} />
      )}

      <Button title="GetByID" onPress={pressedGetById} />
      {!loading && userById && <Text>{userById}</Text>}

      <Button title="ClearAll" onPress={pressedClearAll} />
    </SafeAreaView>
  );
};

export default Home;
