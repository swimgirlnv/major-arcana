import { InfoIcon } from "@chakra-ui/icons"
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, CloseButton, useDisclosure } from "@chakra-ui/react"


export default function FlipCardPrompt() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    <Alert justifyContent='space-between' width="100%" backgroundColor='#f5f5f5'>
      <AlertIcon />
      <Box>
        <AlertDescription color="#275c7b">
          Click on the Major Arcana cards to reveal their meanings, then click on "Get your reading!"
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        right={-10}
        top={-1}
        onClick={onClose}
        color="#275c7b"
      />
    </Alert>
  ) : (
    <Button onClick={onOpen} backgroundColor='transparent'><InfoIcon ></InfoIcon></Button>
  )
}