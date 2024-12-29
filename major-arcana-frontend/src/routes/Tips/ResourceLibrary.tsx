import './Tips.css';
import { Card, CardHeader, CardBody, CardFooter, Image, LinkBox, LinkOverlay } from '@chakra-ui/react'

function ResourceLibrary(){

return (
    <div className="ResourceLibrary">
      <div id="card 0" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>Labyrinthos Tarot</CardHeader>
          <CardBody>
            <LinkOverlay href="https://labyrinthos.co/" target='blank'>
            <Image src="https://play-lh.googleusercontent.com/ehyjogHSCYPFCUW49QfclHaq9jlFX3PVKuDNa8LPGP-CiUYlk729eubsm5XS9m2WGA4" 
            alt="labyrinthos tarot logo" maxWidth='160px'/>
            </LinkOverlay>
            
          </CardBody>
          <CardFooter>
          An online tarot school that aims to bring the ancient ritual of tarot for a modern practice.
          </CardFooter>
        </Card>
      </div>
    </div>
)
}
export default ResourceLibrary;