import { Grid, GridItem } from '@chakra-ui/react';
import BlogList from '../BlogList/BlogList';
import LeftMenu from '../LeftMenu/LeftMenu';
import RightMenu from '../RightMenu/RightMenu';

export default function AppContainer() {
  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={1}>
      <GridItem colSpan={1}>
        <LeftMenu />
      </GridItem>

      <GridItem colSpan={4}>
        <BlogList />
      </GridItem>

      <GridItem colSpan={2}>
        <RightMenu />
      </GridItem>
    </Grid>
  );
}
