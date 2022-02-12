import { Box, Container, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useFetch } from 'usehooks-ts';
import { API_LISTING_URL, API_URL, IBlog, IListing } from './api/api';
import {
  fetchAllListingAtom,
  fetchAllRelevantBlogAtom,
} from './atoms/blog.atoms';
import AppContainer from './components/Container/Container';
import NavigationProvider from './components/Navigation/Navigation';
import bigHeaderImage from './img/bigImg.png';
import './themes/app.scss';

function App() {
  const { data: blogs } = useFetch<IBlog[]>(`${API_URL}week?page=1`);
  const { data: listing } = useFetch<IListing[]>(API_LISTING_URL);
  return (
    <div className="App">
      <NavigationProvider />
      <Box minW="container.xl " m={0} p={4}>
        <Image
          src={bigHeaderImage}
          alt=" "
          objectFit="cover"
          borderRadius="md"
          width="100%"
        />
      </Box>
      <Container maxW="container.xl">
        {blogs && listing && <Initialiser blogs={blogs} listings={listing} />}
        <AppContainer />
      </Container>
    </div>
  );
}

interface initialiserPropos {
  blogs: IBlog[];
  listings: IListing[];
}

function Initialiser({ blogs, listings }: initialiserPropos) {
  const setBlog = useSetRecoilState(fetchAllRelevantBlogAtom);
  const setlistings = useSetRecoilState(fetchAllListingAtom);
  useEffect(() => {
    setBlog(blogs);
    setlistings(listings);
  });

  return <></>;
}
export default App;
