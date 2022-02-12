import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  List,
  ListItem,
  Tag,
  Text,
} from '@chakra-ui/react';
import { BsArrowRightShort } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import { fetchAllListingAtom } from '../../atoms/blog.atoms';
import listingImg from '../../img/listing.png';

export default function RightMenu() {
  const listings = useRecoilValue(fetchAllListingAtom);
  let cloneListings = [...listings];
  cloneListings.length = 5;

  return (
    <>
      <List spacing={3}>
        <ListItem>
          <Box borderWidth="1px" borderRadius="md" p="3">
            <Image src={listingImg} alt=" " objectFit="cover" />
            <Text fontWeight="bold" textColor="black">
              Listen to the S19 Premiere of The CodeNewbie Podcast! 🎧
            </Text>
            <Divider h={3} variant="solid" size="20" colorScheme="blackAlpha" />
            <Text fontWeight="bold" textColor="black">
              "The Benefits of Learning in Public"
            </Text>
            <Text>with Gift Egwuenu.</Text>
            <Button
              leftIcon={<Icon as={BsArrowRightShort} h="5" w="5" />}
              background="none"
              textColor="blue"
            >
              tune in !
            </Button>
          </Box>
        </ListItem>
        <ListItem></ListItem>
        <ListItem>
          <Box borderWidth="1px" borderRadius="md" p="3">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="md" fontWeight="bold">
                Listings
              </Text>
              <Button background="none" fontSize="sm" textColor="blue">
                See all
              </Button>
            </Flex>
            {cloneListings.map((listing) => (
              <InfoCard
                key={listing.id}
                text={listing.title}
                subtitle={listing.category}
                tag={false}
              />
            ))}
          </Box>
        </ListItem>
        <ListItem>
          <Box borderWidth="1px" borderRadius="md" p="3">
            <Text fontSize="md" fontWeight="bold">
              #help
            </Text>
            <InfoCard
              text="How to make a Save button using Javascript"
              subtitle="New"
              tag={true}
            />
          </Box>
        </ListItem>
        <ListItem>
          <Box borderWidth="1px" borderRadius="md" p="3">
            <Text fontSize="md" fontWeight="bold">
              #discuss
            </Text>
            <InfoCard text="Piece by piece #2" subtitle="New" tag={true} />
            <InfoCard
              text="February 11th, 2022: What did you learn this week?"
              subtitle="26 comments"
              tag={false}
            />
            <InfoCard
              text="What are the qualities of a Principal Engineer (or equivalent title)?"
              subtitle="16 comments"
              tag={false}
            />
            <InfoCard
              text="Shouldn't recursion be prevented in React component?"
              subtitle="2 comments"
              tag={false}
            />
            <InfoCard
              text="What would your tech stack of choice be for a new web dev project?"
              subtitle="75 comments"
              tag={false}
            />
          </Box>
        </ListItem>
        <ListItem>
          <Box borderWidth="1px" borderRadius="md" p="3">
            <Text fontSize="md" fontWeight="bold">
              #explainlikeimfive
            </Text>
            <InfoCard
              text="What kind of flow and 3rd party services would one use to implement user to user single and recurring payments?"
              subtitle="New"
              tag={true}
            />
          </Box>
        </ListItem>
        <ListItem>
          <Box borderWidth="1px" borderRadius="md" p="3">
            <Text fontSize="md" fontWeight="bold">
              #challenge
            </Text>
            <InfoCard
              text="Building a Calculator from Scratch in React"
              subtitle="New"
              tag={true}
            />
            <InfoCard
              text="4 Unique data challenges the use of AI in Healthcare Causes"
              subtitle="New"
              tag={true}
            />
          </Box>
        </ListItem>
      </List>
    </>
  );
}

interface InfoCardprops {
  tag?: boolean;
  text: string;
  subtitle: string;
}

export function InfoCard({ tag, text, subtitle }: InfoCardprops) {
  return (
    <Box _hover={{ backgoundColor: 'red' }} mb="4">
      <Text color="gray">{text}</Text>
      {tag ? (
        <Tag background="#fbd34c" color="black">
          {subtitle}
        </Tag>
      ) : (
        <Text>{subtitle}</Text>
      )}
    </Box>
  );
}
