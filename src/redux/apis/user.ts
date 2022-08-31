import axiosInstance from '../../axios/config';

export async function requestGetUsers() {
  try {
    const users = await axiosInstance.get('/users');
    return users.data;
  } catch (err) {
    console.log(err);
  }
}
