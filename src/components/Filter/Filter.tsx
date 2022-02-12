import { Box, Button, Flex, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useFetch } from 'usehooks-ts';
import { API_URL, IBlog } from '../../api/api';
import { fetchAllRelevantBlogAtom } from '../../atoms/blog.atoms';
export default function Filter() {
  const setBlogs = useSetRecoilState(fetchAllRelevantBlogAtom);
  const [filter, setFilter] = useState({
    relavant: true,
    latest: false,
    top: false,
    month: false,
    year: false,
    infinity: false,
    week: false,
  });

  const { data: latestBlogs } = useFetch<IBlog[]>(`${API_URL}latest?page=1`);
  const { data: relevantBlogs } = useFetch<IBlog[]>(`${API_URL}week?page=1`);
  const { data: yearBlogs } = useFetch<IBlog[]>(`${API_URL}year?page=1`);
  const { data: monthBlogs } = useFetch<IBlog[]>(`${API_URL}month?page=1`);
  const { data: infinityBlogs } = useFetch<IBlog[]>(
    `${API_URL}infinity?page=1`
  );

  const latest = latestBlogs ?? [];
  const relevant = relevantBlogs ?? [];
  const year = yearBlogs ?? [];
  const month = monthBlogs ?? [];
  const infinity = infinityBlogs ?? [];

  const latestBlogFilter = () => {
    setFilter({ ...filter, latest: true, relavant: false, top: false });
    setBlogs([...latest]);
  };
  const relevantBlogFilter = () => {
    setFilter({ ...filter, latest: false, relavant: true, top: false });
    setBlogs([...relevant]);
  };

  const topBlogFilter = () => {
    setFilter({ ...filter, latest: false, relavant: false, top: true });
    setBlogs([...relevant]);
  };

  const yearFilter = () => {
    setFilter({
      relavant: false,
      latest: false,
      top: true,
      month: false,
      year: true,
      infinity: false,
      week: false,
    });
    setBlogs([...year]);
  };

  const monthFilter = () => {
    setFilter({
      relavant: false,
      latest: false,
      top: true,
      month: true,
      year: false,
      infinity: false,
      week: false,
    });
    setBlogs([...month]);
  };

  const infinityFilter = () => {
    setFilter({
      relavant: false,
      latest: false,
      top: true,
      month: false,
      year: false,
      infinity: true,
      week: false,
    });
    setBlogs([...infinity]);
  };
  const weekFilter = () => {
    setFilter({
      relavant: false,
      latest: false,
      top: true,
      month: false,
      year: false,
      infinity: false,
      week: true,
    });
    setBlogs([...relevant]);
  };

  return (
    <Box mb="4">
      <Flex justifyContent="space-between" alignItems="center">
        <Grid templateColumns="repeat(3, 1fr)" gap={1}>
          <GridItem>
            <Button
              background="none"
              textColor={filter.relavant ? 'black' : 'grey'}
              onClick={relevantBlogFilter}
            >
              Relevant
            </Button>
          </GridItem>

          <GridItem>
            <Button
              background="none"
              textColor={filter.latest ? 'black' : 'grey'}
              onClick={latestBlogFilter}
            >
              Latest
            </Button>
          </GridItem>

          <GridItem>
            <Button
              background="none"
              textColor={filter.top ? 'black' : 'grey'}
              onClick={topBlogFilter}
            >
              Top
            </Button>
          </GridItem>
        </Grid>
        {filter.top && (
          <Grid templateColumns="repeat(4, 1fr)" gap={1}>
            <GridItem>
              <Button
                background="none"
                textColor={filter.week ? 'black' : 'grey'}
                fontSize="12"
                onClick={weekFilter}
              >
                Week
              </Button>
            </GridItem>

            <GridItem>
              <Button
                background="none"
                textColor={filter.month ? 'black' : 'grey'}
                fontSize="12"
                onClick={monthFilter}
              >
                Month
              </Button>
            </GridItem>

            <GridItem>
              <Button
                background="none"
                textColor={filter.year ? 'black' : 'grey'}
                fontSize="12"
                onClick={yearFilter}
              >
                Year
              </Button>
            </GridItem>
            <GridItem>
              <Button
                background="none"
                textColor={filter.infinity ? 'black' : 'grey'}
                fontSize="12"
                onClick={infinityFilter}
              >
                Infinity
              </Button>
            </GridItem>
          </Grid>
        )}
      </Flex>
    </Box>
  );
}
