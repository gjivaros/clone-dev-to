import { Flex, Icon, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { AiFillCode, AiFillRead } from 'react-icons/ai';
import { BiPodcast, BiSupport } from 'react-icons/bi';
import {
  BsFacebook,
  BsFillTagsFill,
  BsGithub,
  BsInstagram,
  BsTwitch,
  BsTwitter,
} from 'react-icons/bs';
import { FcAbout, FcFaq, FcHome, FcShop } from 'react-icons/fc';
import { GrContact } from 'react-icons/gr';
import { MdPolicy } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { SiGithubsponsors } from 'react-icons/si';

export default function LeftMenu() {
  return (
    <List spacing={3}>
      <ListItem>
        <ListIcon as={FcHome} />
        Home
      </ListItem>
      <ListItem>
        <ListIcon as={AiFillRead} />
        Reading List
      </ListItem>
      <ListItem>
        <ListIcon as={BiSupport} />
        Listings
      </ListItem>
      <ListItem>
        <ListIcon as={BiPodcast} />
        Podcasts
      </ListItem>
      <ListItem>
        <ListIcon as={BsFillTagsFill} />
        Tags
      </ListItem>
      <ListItem>
        <ListIcon as={FcFaq} />
        FAQ
      </ListItem>
      <ListItem>
        <ListIcon as={FcShop} />
        DEV Shop
      </ListItem>
      <ListItem>
        <ListIcon as={SiGithubsponsors} />
        Sponsors
      </ListItem>
      <ListItem>
        <ListIcon as={FcAbout} />
        About
      </ListItem>
      <ListItem>
        <ListIcon as={GrContact} />
        Contact
      </ListItem>

      <Text mt={5} mb={5} fontWeight="bold">
        Other
      </Text>

      <ListItem>
        <ListIcon as={AiFillCode} />
        Code of Conduct
      </ListItem>
      <ListItem>
        <ListIcon as={MdPolicy} />
        Privacy Policy
      </ListItem>
      <ListItem>
        <ListIcon as={RiTeamFill} />
        Terms of use
      </ListItem>

      <Flex gap={2}>
        <Icon as={BsTwitter} />
        <Icon as={BsFacebook} />
        <Icon as={BsGithub} />
        <Icon as={BsInstagram} />
        <Icon as={BsTwitch} />
      </Flex>
    </List>
  );
}
