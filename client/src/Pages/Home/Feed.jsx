import { Text } from "@chakra-ui/react";
import React from "react";
import Top from "./Feed/Top";
import Center from "./Feed/Center";
const Feed = () => {
  return (
    <div style={{minWidth:'10pc'}}>
      <div style={{display:'flex',justifyContent:'center'}}>
        <Top />
      </div>

      <div>
        <Center/>
      </div>


    </div>
  );
};

export default Feed;
