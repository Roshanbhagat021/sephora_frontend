import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { Button } from '@chakra-ui/react';




const Logout = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

  

    function handelLogoutClick(){
        localStorage.clear()
        setIsAuth(false)
    }
  return (
    <div>
        {/* <button onClick={handelLogoutClick}>Logout</button> */}
        <Button
          _hover={{ bg: "dimgray" }}
          bg="black"
          color="white"
          style={{borderRadius:"20px"}}
        //   border="1px solid"
          fontSize={14}
          h={8}
          w={40}
          className="rounded-full"
          onClick={handelLogoutClick}
        >
        Logout
        </Button>
    </div>
  )
}

export default Logout