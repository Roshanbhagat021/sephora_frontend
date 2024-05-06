// Chakra component
import { Button, Flex } from "@chakra-ui/react";
// chakra hook
import { useDisclosure } from "@chakra-ui/react";
import { UserLogin } from "./UserLogin";
import { UserRegister } from "./UserRegister";

const Login = () => {
  const {
    isOpen: isCreateAccountOpen,
    onOpen: onCreateAccountOpen,
    onClose: onCreateAccountClose,
  } = useDisclosure();
  const {
    isOpen: isSignInOpen,
    onOpen: onSignInOpen,
    onClose: onSignInClose,
  } = useDisclosure();

  const handleCreateAccountClick = () => {
    onCreateAccountOpen();
    onSignInClose(); // Close sign-in component if open
  };

  const handleSignInClick = () => {
    onSignInOpen();
    onCreateAccountClose();
  };

  const style1 = {
    borderRadius: "20px",
  };
  return (
    <>
      <Flex h={16} gap={4} alignItems="center" w="100%" justifyContent="center">
        <Button
          _hover={{ bg: "dimgray" }}
          bg="black"
          color="white"
          style={style1}
          border="1px solid"
          fontSize={12}
          h={8}
          w={40}
          onClick={handleSignInClick}
        >
          Sign In
        </Button>
        <Button
          onClick={handleCreateAccountClick}
          _hover={{ bg: "ghostwhite" }}
          style={style1}
          bg="white"
          color="black"
          fontWeight="700"
          border="1px solid"
          fontSize={12}
          h={7}
          w={40}
        >
          Create Account
        </Button>
      </Flex>

      {isCreateAccountOpen && (
        <UserRegister
          isOpen={isCreateAccountOpen}
          onClose={onCreateAccountClose}
        />
      )}
      {isSignInOpen && (
        <UserLogin isOpen={isSignInOpen} onClose={onSignInClose} />
      )}
    </>
  );
};
export default Login;
