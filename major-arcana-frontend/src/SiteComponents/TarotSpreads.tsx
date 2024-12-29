import './TopBar.css';
import { useNavigate } from "react-router-dom";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'

import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

function TarotSpreads() {

 let navigate = useNavigate();

  const handleCareer = () => {
      navigate("/Career");
  }

  const handleDaily = () => {
      navigate("/Daily");
  }

  const handleLove = () => {
      navigate("/Love");
  }

  return (
        <Menu>
        <MenuButton as={Button} variant="primary" fontSize="xl"  _hover={{color: 'white', background:'#275c7b'}}>Tarot Spreads</MenuButton>
          <MenuList>
            <MenuItem className="Career" onClick={handleCareer}>Career</MenuItem>
            <MenuItem className="Daily" onClick={handleDaily}>Daily</MenuItem>
            <MenuItem className="Love" onClick={handleLove}>Love</MenuItem>
          </MenuList>
        </Menu>
  );
}

export default TarotSpreads;