import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FcComments, FcLike } from 'react-icons/fc';
import { IBlog } from '../../api/api';
export interface BlogProps {
  blog: IBlog;
}
export default function Blog({ blog }: BlogProps) {
  const date = new Date();
  const publishDate = +blog.readable_publish_date.split(' ')[1];
  return (
    <Box
      key={blog.id}
      borderRadius="lg"
      overflow="hidden"
      background={'white'}
      mb={'10'}
    >
      {blog.main_image && <Image src={blog.main_image} alt=" " />}
      <Box pl={4} pr={4} pt={2}>
        <Wrap>
          <WrapItem>
            <Avatar name={blog.user.name} src={blog.user.profile_image_90} />
          </WrapItem>

          <WrapItem>
            <Flex flexDirection={'column'}>
              <Text>{blog.user.name}</Text>
              <Text>
                {blog.readable_publish_date} ({date.getDate() - publishDate} day
                ago)
              </Text>
            </Flex>
          </WrapItem>
        </Wrap>
        <Box
          mt="1"
          pl={10}
          fontWeight="semibold"
          lineHeight="tight"
          isTruncated
          wordBreak={'break-all'}
        >
          <Heading size="lg">{blog.title}</Heading>
          {blog.tag_list.map((tag, i) => (
            <Tag key={i} size="md" background={'none'}>
              #{tag}
            </Tag>
          ))}
        </Box>
        <Flex pl={10} justifyContent="space-between" alignItems="center">
          <Wrap>
            <WrapItem alignItems={'center'} gap={1}>
              <Icon as={FcLike} />{' '}
              <Text>{blog.public_reactions_count} Reactions</Text>
            </WrapItem>

            <WrapItem alignItems={'center'} gap={1}>
              <Icon as={FcComments} />{' '}
              <Text>{blog.comments_count} Comments</Text>
            </WrapItem>
          </Wrap>

          <Wrap>
            <WrapItem alignItems={'center'} gap={1}>
              <Text as="p" color="gray">
                {blog.reading_time} Read
              </Text>
              <Button color="gray">Save</Button>
            </WrapItem>
          </Wrap>
        </Flex>
      </Box>
      <Box pl={4} pr={4} pt={2}></Box>
      <Container></Container>
    </Box>
  );
}
