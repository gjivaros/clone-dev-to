import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { BlogAsItem, IBlog } from '../../api/api';
import { fetchAllRelevantBlogAtom } from '../../atoms/blog.atoms';
import Blog from '../Blog/Blog';
import Filter from '../Filter/Filter';

export default function BlogList() {
  const blogs: IBlog[] = useRecoilValue(fetchAllRelevantBlogAtom) || [
    BlogAsItem,
  ];
  return (
    <Box p={5}>
      <Filter />
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </Box>
  );
}
