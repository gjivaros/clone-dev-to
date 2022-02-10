import { atom, selector } from 'recoil';
import { PostAsItem } from '../api/api';

const FETCH_ALL_POST = 'FETCH_ALL_POST';
const FETCH_POST = 'FETCH_POST';
const SET_POST_ID = 'SET_POST_ID';
const allInitalPostsValue: PostAsItem[] = [];
const initalPostValue: number | null = null;

export const postsAtomState = atom({
  key: FETCH_ALL_POST,
  default: allInitalPostsValue,
});

export const postAtomState = atom({
  key: FETCH_POST,
  default: initalPostValue,
});

export const postSelectorState = selector({
  key: SET_POST_ID,
  get: ({ get }) => {},
});
