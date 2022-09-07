import axiosInstance from '../../axios/config';
import {IRedditPost} from '../../core/interfaces/reddit';

export async function getRedditList() {
  try {
    const data = await axiosInstance.get('r/reactnative/new.json');
    const list = data.data.data.children;
    const mappedList: IRedditPost = list.map((d: any) => {
      return d.data;
    });
    return mappedList;
  } catch (err) {
    console.log(err);
  }
}
