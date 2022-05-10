import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Home = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h1>
        The Current user is :{" "}
        {user ? user.displayName : "no one there is a voot"}
      </h1>
    </div>
  );
};

export default Home;
