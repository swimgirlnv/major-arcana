import './TopBar.css';
import { useNavigate } from "react-router-dom";
import TarotSpreads from './TarotSpreads';
import {background, Button} from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const brandPrimary = defineStyle({
  background: 'orange.500',
  color: 'white',
  fontFamily: 'serif',
  fontWeight: 'normal',

  // let's also provide dark mode alternatives
  _dark: {
    background: 'orange.300',
    color: 'orange.800',
  }
})

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary },
})

type Props = {
  userName?: string,
  pictureURL?: string,
  onLogout: () => void
}

function TopBar(props: Props) {

 let navigate = useNavigate();

  const handleJournal = () => {
        navigate("/Journal");
    }
  
  const handleAbout = () => {
      navigate("/About");
  }

  return (
        <div className="top-bar">
          <div className='sizing-div'>
            <Button variant="brandPrimary" color="#275c7b" fontSize="xl" 
            onClick={() => navigate("/")}
            _hover={{color: 'white', background:'#275c7b'}}
            >Home</Button>
          </div>
          <div className='sizing-div'>
            <Button variant="brandPrimary" color="#275c7b" fontSize="xl" 
            onClick={() => navigate("/Tips")} _hover={{color: 'white', background:'#275c7b'}}>Tarot Tips</Button>
          </div>
          <div className='sizing-div'>
            <Button variant="brandPrimary" color="#275c7b" ><TarotSpreads /></Button>
          </div>
          <div className='sizing-div'>
            <Button variant="brandPrimary" color="#275c7b" fontSize="xl" 
            onClick={handleJournal} _hover={{color: 'white', background:'#275c7b'}}>Journal</Button>
          </div>
          <div className='sizing-div'>
            <Button variant="brandPrimary" color="#275c7b" fontSize="xl" 
            onClick={handleAbout} _hover={{color: 'white', background:'#275c7b'}}>About</Button>
          </div>
          <div className='sizing-div'>
            {/* <p color="#275c7b">You are communing with the spirits as</p><b>{props.userName}</b>. */}
            <Button variant="brandPrimary" color="#275c7b" fontSize="xl" 
            onClick={props.onLogout} _hover={{color: 'white', background:'#275c7b'}}>Log Out</Button>
          </div>
        </div>
  );
}

export default TopBar;