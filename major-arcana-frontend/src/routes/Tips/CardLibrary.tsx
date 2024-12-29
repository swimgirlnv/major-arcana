import './Tips.css';
import { Card, CardHeader, CardBody, CardFooter, Image } from '@chakra-ui/react'

function CardLibrary(){

return (
    <div className="CardLibrary">
      <div id="card 0" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>0 - The Fool</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/kBNeNZj.jpg" alt="the fool" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            The fool ventures into the unkown. They may not know where they are going, but they know they cannot prepare for every circumstance.
            Sometimes you just have to go where the path leads you. Given the chance to broaden your horizons, even if you aren't fully
            confident, you are encouraged to say yes.
          </CardFooter>
        </Card>
      </div>
      <div id="card 1" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>1 - The Magician</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/uxKUjWq.jpg" alt="the magician" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            Weild your own power carefully. Manifest your desires without hurting others. You are equipped with everything 
            you need to succeed: now explore your motivations! Are you pursuing your goals for a greater good and honoring 
            your highest self?
          </CardFooter>
        </Card>
      </div>
      <div id="card 2" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>2 - The High Priestess</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/oQw5qID.jpg" alt="the high priestess" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            You likely know what was and is, but may be doubting your sense of what will be. Listen to your heart, your instincts are correct.
          </CardFooter>
        </Card>
      </div>
      <div id="card 3" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>3 - The Empress</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/BZ3AxR8.jpg" alt="the empress" maxWidth='160px' />
          </CardBody>
          <CardFooter>
            You likely know hwat was and is, but may be doubting your sense of what will be. Listen to your heart, your instincts are correct.
          </CardFooter>
        </Card>
      </div>
      <div id="card 4" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>4 - The Emperor</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/wgKDISa.jpg" alt="the emperor" maxWidth='160px' />
          </CardBody>
          <CardFooter>
            You may be assuming a role of authority. This can take many forms, but comes with a warning: Power can corrupt. 
            Garner loyalty through honorable actions.
          </CardFooter>
        </Card>
      </div>
      <div id="card 5" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>5 - The Hierophant</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/MtZuLBR.jpg" alt="the hierophant" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            You may need to adopt the role of learner, soaking up everythign you can about your chosen path.
            In order to make your mark, you must first understand what has come before you.
          </CardFooter>
        </Card>
      </div>
      <div id="card 6" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>6 - The Lovers</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/yjoFaht.jpg" alt="the lovers" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            Represents a moment of choice, a chance to follow your heart and take a hold of your destiny. Whatever relationship is at hand, 
            use your emotional intelligence to guide you.
          </CardFooter>
        </Card>
      </div>
      <div id="card 7" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>7 - The Chariot</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/R4Cia7f.jpg" alt="the chariot" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            The stamina you need to see your journey through, steered by a loyal heart. If you remain determined and banish self doubt,
            you will reach your destination. You know what you want and what is best for yourself.
          </CardFooter>
        </Card>
      </div>
      <div id="card 8" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>8 - Strength</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/9hjbeQs.jpg" alt="strength" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            You are being guided to never back down from a challenge. Although you may be entering (or in the midst of) a difficult time,
            remember your own strength. Wield your emotional stamina!
          </CardFooter>
        </Card>
      </div>
      <div id="card 9" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>9 - The Hermit</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/1xv83oc.jpg" alt="the hermit" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            No growth is possible without a period of dormancy. Retreat from your everyday life and pause your routine. 
            Release your responsibilites. Give yourself time to access your own needs. By reclaiming unstructured time, you can gain perspective.
          </CardFooter>
        </Card>
      </div>
      <div id="card 10" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>10 - Wheel of Fortune</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/ZhPLwKb.jpg" alt="the wheel of fortune" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            Even though things may seem peaceful at the moment, you never know what tomorrow brings. The only constant in life is change. 
            If you have felt displaced, this is a reminder that there will be peace again soon.
          </CardFooter>
        </Card>
      </div>
      
      <div id="card 11" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>11 - Justice</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/i7qXyRH.jpg" alt="justice" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            Honor your perceptions and stand by your actions. Justice will be served to those who have wronged you, restoring order.
          </CardFooter>
        </Card>
      </div>
      <div id="card 12" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>12 - The Hanged One</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/ais6tL0.jpg" alt="the hanged one" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            You are in a situation where you are unhappy, dissatisfied, or can't make a decision. Stop pressuring yourself to control the outcome,
            and instead try looking at things from a different angle.
          </CardFooter>
        </Card>
      </div>
      <div id="card 13" className="library-card"> 
      <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>13 - Death</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/HUeFSOK.jpg" alt="death" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            Take this as an opportunity to explore how loss can yield gain. So ends a phase of your life. 
            Although it can be painful, try to focus on how the experience can help you.
          </CardFooter>
        </Card>
      </div>
      <div id="card 14" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>14 - Temperance</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/jcc7PfI.jpg" alt="temperance" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            Moderation is the key to success, so get involved (but not too involved!). Practice patience with yourself and know you
            can only do so much without your labors taking a toll on your happiness.
          </CardFooter>
        </Card>
      </div>
      <div id="card 15" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>15 - The Devil</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/m06KaU3.jpg" alt="the devil" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            Examine your attachments and break free from unhealthy addictions. You may be giving in to your darker nature, which, if 
            controlled, can benefit your overall growth. Exercise control!
          </CardFooter>
        </Card>
      </div>
      <div id="card 16" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>16 - The Tower</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/lc1SBja.jpg" alt="the tower" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            Acts of destruction make way for radical creation. Something in your life - perhaps something you never expected to collapse - has 
            met its demise. It's understandabel to have mixed feelings but try to set your sights on the potential you have to make something 
            even better.
          </CardFooter>
        </Card>
      </div>
      <div id="card 17" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>17 - The Star</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/nk45mdx.jpg" alt="the star" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            You may find yourself entering a time of significant spiritual or emotional abundance, allowing you access to your true potential.
          </CardFooter>
        </Card>
      </div>
      <div id="card 18" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>18 - The Moon</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/NVEH8OV.jpg" alt="the moon" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            You may be seeking information. Don't trust what you see at a glance, there may be some context missing. Ask more questions
            before you make a decision.
          </CardFooter>
        </Card>
      </div>
      <div id="card 19" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>19 - The Sun</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/ytr3zRb.jpg" alt="the sun" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            You are due for a welcome reprieve. Be fearless and vibrant facing down anyone who tries to diminish your great deeds.
          </CardFooter>
        </Card>
      </div>
      <div id="card 20" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>20 - Judgement</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/NmKJCxW.jpg" alt="judgement" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            You are being summoned to answer the call of your highest self and commit to an elevated purpose. There is an opportunity coming 
            your way, a chance to demonstrate everything you've learned and worked for.
          </CardFooter>
        </Card>
      </div>
      <div id="card 21" className="library-card">
        <Card justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>21 - The World</CardHeader>
          <CardBody>
            <Image src="https://i.imgur.com/gCj43zX.jpg" alt="the world" maxWidth='160px'/>
          </CardBody>
          <CardFooter>
            You have reached your goal (or nearly so) and are understandably bursting with pride. All the sleepless nights, sacrifices, and hard
            work have paid off and you now find yourself able to relax!
          </CardFooter>
        </Card>
      </div>
    </div>
)
}
export default CardLibrary;