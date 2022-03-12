import React, { useEffect, useState } from "react";
import api from "../api";
import CardMainPage from "./cardMainPage/cardMainPage";

const Main = () => {
  const [users, setUsers] = useState();
    useEffect(() => {
      api.developers.fetchAll().then((data) => setUsers(data));
    }, []);
    users && console.log(users.map(user => user.age));
  return (
      <>
        {users && users.map((user) => (
          <CardMainPage key={user._id} name={user.name} age={user.age} about={user.description} imageUrl={user.src} alt={user.alt}/>
        ))}
      </>
    );
};

export default Main;
