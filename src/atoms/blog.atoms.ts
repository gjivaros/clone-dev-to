import { atom } from 'recoil';
import { IBlog, IListing } from '../api/api';

const FETCH_ALL_RELEVANT_BLOG = 'FETCH_ALL_RELEVANT_BLOG';
const FETCH_ALL_LISTING = 'FETCH_ALL_LISTING';
const initalRelavantBlog: IBlog[] = [];
const initalListing: IListing[] = [];

export const fetchAllRelevantBlogAtom = atom<IBlog[]>({
  key: FETCH_ALL_RELEVANT_BLOG,
  default: initalRelavantBlog,
});

export const fetchAllListingAtom = atom<IListing[]>({
  key: FETCH_ALL_LISTING,
  default: initalListing,
});
