import React from "react";
import Left from "./Left";
import Feed from "./Feed";
import Right from "./Right";

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "2pc",
          width: "10%",
          // background:'red',
          minHeight: "100vh",
        }}
      >
        <Left />
      </div>

      <div>
        <Feed/>
      </div>

      <div>
        <Right/>
      </div>

    </div>
  );
};

export default Home;
