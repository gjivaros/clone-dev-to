import {
  Button,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FaBell, FaBullseye, FaSearch } from 'react-icons/fa';
import devLogo from '../../img/logo.png';

export interface INavigationItem {
  id: number;
  title: string;
}
export interface NavigationPropos {
  data: INavigationItem[];
}

export default function NavigationProvider() {
  return (
    <>
      <Flex justifyContent="space-around" mt="2" justifyItems="center">
        <div className="Navigation-Left">
          <Flex alignItems="center">
            <Image src={devLogo} height="50" width="50" />
            <InputGroup size="lg" w="2xl">
              <Input placeholder="Search ..." />
              <InputRightAddon children={<Icon as={FaSearch} />} />
            </InputGroup>
          </Flex>
        </div>

        <div className="Navigation-Right">
          <Flex gap="5">
            <Button variant="outline" colorScheme="messenger">
              Create Post
            </Button>
            <Icon as={FaBell} w="8" h="8" />
            <Menu>
              <MenuButton as={Button} background="none">
                <Icon as={FaBullseye} w="8" h="8" />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>@MrJivaros</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                  <MenuItem>Dashboard</MenuItem>
                  <MenuItem>Create Post</MenuItem>
                  <MenuItem>Reading list</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Reading list</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                  <MenuItem>Sign Out</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
        </div>
      </Flex>
    </>
  );
}
