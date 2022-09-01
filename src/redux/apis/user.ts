import axiosInstance from '../../axios/config';

export async function requestGetUsers() {
  try {
    const users = await axiosInstance.get('/users');
    return users.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function requestGetUserById(id: string) {
  try {
    const user = await axiosInstance.get('/users/' + id);
    return user.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
